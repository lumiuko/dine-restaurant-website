import FeaturedSection from '@/components/FeaturedSection'
import HighlightCard from '@/components/HighlightCard'
import TabbedSection from '@/components/TabbedSection'
import ReservationBanner from '@/components/ReservationBanner'
import Button from '@/components/Button'

export default function Homepage() {
  return (
    <main>
      <section className="px-6 pt-[14.5rem] pb-[9.5rem] bg-cod-gray bg-no-repeat bg-hero-mobile bg-contain bg-top md:px-10 md:pt-[23.375rem] md:pb-[13.5rem] md:bg-hero-tablet xl:pt-16 xl:pb-[12.375rem] xl:bg-hero-desktop xl:bg-right-bottom">
        <div className="max-w-container mx-auto flex flex-col items-center gap-9 md:gap-[2.375rem] xl:items-start xl:gap-[9.625rem]">
          <img src="/logo.svg" className="h-[32px] md:h-[40px]" alt="Dine logo" />
          <div className="flex flex-col items-center text-center text-white xl:items-start xl:text-left">
            <h1 className="text-[2rem] leading-[2.5rem] tracking-[-0.4px] font-light text-balance md:text-l md:leading-[4rem] md:tracking-[-0.6px] xl:text-xl xl:leading-xl xl:tracking-xl">
              <span>Exquisite dining</span>
              <span className="block">since 1989</span>
            </h1>
            <p className="mt-5 mb-[3.25rem] max-w-[573px] xl:max-w-[445px] xl:mt-[0.625rem] xl:mb-10">
              Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
            </p>
            <Button to="/reservation" isTransparent>
              Book a table
            </Button>
          </div>
        </div>
      </section>
      <div className="mt-[-4.5rem] flex flex-col gap-[6.25rem] md:-mt-24 md:gap-[7.5rem] xl:mt-[-4.375rem] xl:-mb-20">
        <FeaturedSection
          title="Enjoyable place for all the family"
          text="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
          image="/homepage/enjoyable-place"
          imageAlt="Scenery with animals and houses."
        />
        <FeaturedSection
          title="The most locally sourced food"
          text="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
          image="/homepage/locally-sourced"
          imageAlt="Plate with food and spoon in it."
        />
      </div>
      <section className="px-6 pt-[4.5rem] pb-[6.375rem] bg-cod-gray text-white md:px-10 md:py-24 xl:pt-[12.5rem] xl:pb-[7.5rem]">
        <div className="max-w-container mx-auto flex flex-col justify-between items-center gap-[5.25rem] md:gap-[3.375rem] xl:flex-row xl:items-start">
          <div className="flex flex-col items-center text-center max-w-[445px] xl:items-start xl:text-start">
            <img src="/patterns/pattern-divide.svg" className="h-[7px]" alt="" />
            <h2 className="mt-9 text-[2rem] leading-[2.5rem] tracking-[-0.4px] font-bold text-balance md:mt-10 md:text-l md:leading-l md:tracking-l xl:mt-14 xl:text-wrap">
              A few highlights from our menu
            </h2>
            <p className="mt-3 md:mt-7">
              We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every
              season.
            </p>
          </div>
          <div className="flex flex-col gap-6 max-w-[573px] xl:max-w-[540px] xl:mt-14">
            <HighlightCard
              title="Seared Salmon Fillet"
              text="Our locally sourced salmon served with a refreshing buckwheat summer salad."
              image="/homepage/salmon"
              imageAlt="Served Salmon Filet."
            />
            <HighlightCard
              title="Rosemary Filet Mignon"
              text="Our prime beef served to your taste with a delicious choice of seasonal sides."
              image="/homepage/beef"
              imageAlt="Served Rosemary Filet."
            />
            <HighlightCard
              title="Summer Fruit Chocolate Mousse"
              text="Creamy mousse combined with summer fruits and dark chocolate shavings."
              image="/homepage/chocolate"
              imageAlt="Served Fruit Chocolate."
            />
          </div>
        </div>
      </section>
      <TabbedSection />
      <ReservationBanner />
    </main>
  )
}
