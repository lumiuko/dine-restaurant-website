import Picture from '@/components/Picture'

export default function FeaturedSection({ title, text, image, imageAlt }) {
  return (
    <section className="px-6 group md:px-10 overflow-hidden last:pb-[6.25rem] last:md:pb-[7.375rem] relative before:hidden before:absolute before:w-[895px] before:h-[320px] first:before:left-[-517px] first:before:top-[12.25rem] first:before:rounded-tr-[100px]  last:before:bottom-0 last:before:right-[-511px] last:before:rounded-tl-[100px] before:bg-light-gray before:-z-10 md:before:block xl:first:before:top-auto xl:first:before:bottom-20 xl:first:before:left-0 xl:last:before:right-0 xl:last:before:bottom-20 xl:last:pb-0">
      <div className="max-w-container mx-auto flex flex-col justify-between items-center gap-12 md:gap-14 xl:flex-row">
        <div className="relative xl:group-even:order-1">
          <Picture image={image} imageAlt={imageAlt} />
          <img
            src="/patterns/pattern-lines.svg"
            className="hidden md:group-last:block absolute bottom-14 -right-14 xl:bottom-auto xl:top-[17.625rem] xl:right-[-7.125rem]"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center text-center md:max-w-[445px] xl:items-start xl:text-start xl:group-odd:mt-12 xl:group-even:-mt-10">
          <img src="/patterns/pattern-divide.svg" className="h-[7px]" alt="" />
          <h2 className="mt-9 text-[2rem] leading-[2.5rem] tracking-[-0.4px] font-bold text-balance md:mt-10 md:text-l md:leading-l md:tracking-l xl:mt-14">
            {title}
          </h2>
          <p className="mt-3 md:mt-7">{text}</p>
        </div>
      </div>
    </section>
  )
}
