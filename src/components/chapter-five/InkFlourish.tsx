type InkFlourishProps = {
  mirrored?: boolean
}

export function InkFlourish({ mirrored = false }: InkFlourishProps) {
  return (
    <div className="h-8 w-64 opacity-60">
      <svg
        viewBox="0 0 200 20"
        className={`h-full w-full ${mirrored ? 'scale-y-[-1]' : ''}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10 Q25 0, 50 10 T100 10 T150 10 T200 10"
          stroke="#E4B5FF"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}
