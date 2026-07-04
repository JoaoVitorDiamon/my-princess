export function OrnamentalDivider() {
  return (
    <div className="my-8 flex items-center justify-center space-x-2">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary-fixed-dim/50" />
      <span className="material-symbols-outlined text-[12px] text-secondary-fixed-dim/70">
        flare
      </span>
      <span className="material-symbols-outlined text-[16px] text-secondary-fixed-dim/90">
        flare
      </span>
      <span className="material-symbols-outlined text-[12px] text-secondary-fixed-dim/70">
        flare
      </span>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary-fixed-dim/50" />
    </div>
  )
}
