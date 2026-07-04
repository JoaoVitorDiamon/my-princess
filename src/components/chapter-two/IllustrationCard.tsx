type IllustrationCardProps = {
  imageUrl: string
  alt: string
  heightClassName: string
}

export function IllustrationCard({
  imageUrl,
  alt,
  heightClassName,
}: IllustrationCardProps) {
  return (
    <div className={`gilded-glow relative mb-8 w-full overflow-hidden rounded-lg ${heightClassName}`}>
      <div
        className="h-full w-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: `url('${imageUrl}')` }}
        role="img"
        aria-label={alt}
      />
    </div>
  )
}
