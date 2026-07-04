type DecorativeImageProps = {
  imageUrl: string
  alt: string
  className?: string
}

export function DecorativeImage({
  imageUrl,
  alt,
  className = '',
}: DecorativeImageProps) {
  return (
    <div className={`detail-float-1 relative hidden md:block ${className}`}>
      <div className="h-full min-h-[200px] w-full overflow-hidden rounded-full border border-primary/20 shadow-[inset_0_0_20px_rgba(228,181,255,0.2)]">
        <div
          className="h-full w-full bg-cover bg-center opacity-60"
          role="img"
          aria-label={alt}
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
      </div>
    </div>
  )
}
