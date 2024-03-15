export default function HighlightCard({ title, text, image, imageAlt }) {
  return (
    <article className="flex flex-col items-center gap-9 pb-7 border-b border-b-white/15 last:pb-0 last:border-none group md:flex-row md:pb-6 md:gap-[1.875rem]">
      <div className="flex-shrink-0 flex after:hidden after:w-8 after:h-[1px] after:bg-beaver after:mt-[1.125rem] md:after:block">
        <picture>
          <source srcSet={`${image}-desktop-tablet@2x.jpg 2x`} media="(min-width: 768px)" />
          <source srcSet={`${image}-desktop-tablet.jpg`} media="(min-width: 768px)" />
          <source srcSet={`${image}-mobile@2x.jpg 2x`} />
          <img src={`${image}-mobile.jpg`} className="md:w-32 md:h-24 object-cover" alt={imageAlt} />
        </picture>
      </div>
      <div className="text-center min-h-[108px] group-last:min-h-0 md:text-left md:min-h-0">
        <h3 className="font-bold text-m leading-m tracking-m">{title}</h3>
        <p className="mt-[0.375rem] text-[1rem] leading-body-1">{text}</p>
      </div>
    </article>
  )
}
