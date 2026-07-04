import { useEffect, useRef } from 'react'

const vertexShaderSource = `
attribute vec2 a_position;
varying vec2 v_texCoord;

void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const fragmentShaderSource = `
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

varying vec2 v_texCoord;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v) {
  const vec4 C = vec4(
    0.211324865405187,
    0.366025403784439,
    -0.577350269189626,
    0.024390243902439
  );

  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod(i, 289.0);

  vec3 p = permute(
    permute(i.y + vec3(0.0, i1.y, 1.0)) +
    i.x +
    vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
    0.5 - vec3(
      dot(x0, x0),
      dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)
    ),
    0.0
  );

  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);

  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;

  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = v_texCoord;

  vec3 color1 = vec3(0.44, 0.26, 0.56);
  vec3 color2 = vec3(0.96, 0.65, 0.14);
  vec3 color3 = vec3(0.98, 0.94, 0.84);

  float n = snoise(uv * 2.0 + u_time * 0.05);
  float n2 = snoise(uv * 4.0 - u_time * 0.02);

  vec3 finalColor = mix(color1, color2, uv.y + n * 0.1);
  finalColor = mix(
    finalColor,
    color3,
    clamp(n2 * 0.5 + 0.5, 0.0, 1.0) * (1.0 - uv.y)
  );

  float paper = snoise(uv * 100.0) * 0.02;
  finalColor += paper;

  float vignette = distance(uv, vec2(0.5));
  finalColor *= smoothstep(0.8, 0.2, vignette);

  gl_FragColor = vec4(finalColor, 1.0);
}
`

function createShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type)

  if (!shader) {
    return null
  }

  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }

  return shader
}

function createProgram(gl: WebGLRenderingContext) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource,
  )

  if (!vertexShader || !fragmentShader) {
    return null
  }

  const program = gl.createProgram()

  if (!program) {
    return null
  }

  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)

  gl.deleteShader(vertexShader)
  gl.deleteShader(fragmentShader)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program)
    return null
  }

  return program
}

export function BackgroundShader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const gl =
      canvas.getContext('webgl') ??
      canvas.getContext('experimental-webgl')

    if (!(gl instanceof WebGLRenderingContext)) {
      return
    }

    let animationFrame = 0
    let resizeObserver: ResizeObserver | null = null
    const mouse = { x: 0, y: 0 }

    const syncSize = () => {
      const width = canvas.clientWidth || 1280
      const height = canvas.clientHeight || 720

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }
    }

    const program = createProgram(gl)

    if (!program) {
      return
    }

    const positionBuffer = gl.createBuffer()

    if (!positionBuffer) {
      gl.deleteProgram(program)
      return
    }

    syncSize()

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize)
      resizeObserver.observe(canvas)
    }

    gl.useProgram(program)
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    )

    const positionLocation = gl.getAttribLocation(program, 'a_position')
    const timeLocation = gl.getUniformLocation(program, 'u_time')
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
    const mouseLocation = gl.getUniformLocation(program, 'u_mouse')

    if (positionLocation >= 0) {
      gl.enableVertexAttribArray(positionLocation)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
    }

    mouse.x = canvas.width / 2
    mouse.y = canvas.height / 2

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()

      if (!rect.width || !rect.height) {
        return
      }

      const normalizedX = (event.clientX - rect.left) / rect.width
      const normalizedY = 1 - (event.clientY - rect.top) / rect.height

      mouse.x = normalizedX * canvas.width
      mouse.y = normalizedY * canvas.height
    }

    const render = (time: number) => {
      syncSize()
      gl.viewport(0, 0, canvas.width, canvas.height)

      if (timeLocation) {
        gl.uniform1f(timeLocation, time * 0.001)
      }

      if (resolutionLocation) {
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      }

      if (mouseLocation) {
        gl.uniform2f(mouseLocation, mouse.x, mouse.y)
      }

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      animationFrame = window.requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationFrame = window.requestAnimationFrame(render)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('mousemove', handleMouseMove)
      resizeObserver?.disconnect()
      gl.deleteBuffer(positionBuffer)
      gl.deleteProgram(program)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
    </div>
  )
}
