import type { ReactNode } from 'react'
import { IllustrationCard } from './IllustrationCard'
import { OrnamentalDivider } from './OrnamentalDivider'

type StoryPanelProps = {
  chapterLabel?: string
  title?: string
  quote?: string
  body: string[]
  image: {
    url: string
    alt: string
    heightClassName: string
  }
  containerClassName: string
  ornamentPosition: 'top-left' | 'bottom-right'
  showDivider?: boolean
  footerAction?: ReactNode
}

export function StoryPanel({
  chapterLabel,
  title,
  quote,
  body,
  image,
  containerClassName,
  ornamentPosition,
  showDivider = false,
  footerAction,
}: StoryPanelProps) {
  const ornamentClassName =
    ornamentPosition === 'top-left'
      ? 'absolute top-4 left-4'
      : 'absolute right-4 bottom-4'

  return (
    <article
      className={`deckled-edge ink-shadow group relative flex-1 overflow-hidden rounded-xl p-8 md:p-12 ${containerClassName}`}
    >
      <div
        className={`${ornamentClassName} animate-breathe text-secondary-fixed-dim/50 opacity-50 transition-opacity duration-1000 group-hover:opacity-100`}
        style={ornamentPosition === 'bottom-right' ? { animationDelay: '0.5s' } : undefined}
      >
        <span className="material-symbols-outlined text-[32px]">auto_awesome</span>
      </div>

      {(chapterLabel || title) && (
        <div className="mb-8">
          {chapterLabel && (
            <p className="mb-2 font-label-caps text-label-caps tracking-widest text-tertiary">
              {chapterLabel}
            </p>
          )}
          {title && (
            <h1 className="mb-6 font-display-hero text-headline-md text-primary md:text-headline-lg">
              {title}
            </h1>
          )}
          {showDivider && <OrnamentalDivider />}
        </div>
      )}

      {quote && (
        <p className="mb-8 mt-4 font-script-accent text-script-accent text-primary-container italic md:text-right">
          {quote}
        </p>
      )}

      {quote && (
        <div className="mb-8">
          <p className="font-body-md text-body-md leading-relaxed text-on-surface">
            {body[0]}
          </p>
        </div>
      )}

      {!quote && (
        <IllustrationCard
          imageUrl={image.url}
          alt={image.alt}
          heightClassName={image.heightClassName}
        />
      )}

      {!quote && body.length > 0 && (
        <div className="space-y-6">
          <p className="font-body-lg text-body-lg leading-relaxed text-on-surface">
            {body[0]}
          </p>
          {body[1] && (
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              {body[1]}
            </p>
          )}
        </div>
      )}

      {quote && (
        <>
          <IllustrationCard
            imageUrl={image.url}
            alt={image.alt}
            heightClassName={image.heightClassName}
          />
          {footerAction ? <div className="mt-12 flex justify-end">{footerAction}</div> : null}
        </>
      )}
    </article>
  )
}
