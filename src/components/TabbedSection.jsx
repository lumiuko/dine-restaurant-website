import { useState } from 'react'
import Button from '@/components/Button'
import Picture from '@/components/Picture'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

const tabs = [
  {
    slug: 'family-gathering',
    title: 'Family Gathering',
    text: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.',
    imageAlt: 'Family members eating together.'
  },
  {
    slug: 'special-events',
    title: 'Special Events',
    text: 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.',
    imageAlt: 'A group of people sitting at a table and holding glasses of wine.'
  },
  {
    slug: 'social-events',
    title: 'Social Events',
    text: 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.',
    imageAlt: 'Glasses of water and people at a table.'
  }
]

export default function TabbedSection() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)
  const currentTab = tabs[currentTabIndex]

  const tabButtons = tabs.map((tab, index) => (
    <button
      key={index}
      className={`uppercase tracking-s md:w-[225px] md:pb-2 xl:w-auto xl:pb-0 hover:text-gray transition-all relative ${
        currentTabIndex === index
          ? 'text-gray xl:ml-[2px] after:absolute after:bg-beaver after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-[1px] xl:after:hidden'
          : ''
      }`}
      onClick={() => setCurrentTabIndex(index)}
    >
      {tab.title}
    </button>
  ))

  return (
    <section className="px-6 pt-20 pb-[7.75rem] md:px-10 md:py-[7.5rem] overflow-hidden relative before:hidden before:absolute before:w-[895px] before:h-[320px] before:left-[-517px] before:rounded-tr-[100px] before:top-0 before:bg-light-gray before:-z-10 md:before:block xl:py-40 xl:before:left-[-350px]">
      <div className="max-w-container mx-auto flex flex-col justify-between items-center gap-12 md:gap-14 xl:flex-row">
        <div className="relative flex-shrink-0">
          <SwitchTransition>
            <CSSTransition key={currentTabIndex} classNames="fade" timeout={300}>
              <Picture image={`/homepage/${currentTab.slug}`} imageAlt={currentTab.imageAlt} />
            </CSSTransition>
          </SwitchTransition>
          <img
            src="/patterns/pattern-lines.svg"
            className="hidden md:block absolute top-[-2.375rem] left-[-3.625rem] xl:top-[-2.375rem] xl:-left-10"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center gap-7 md:gap-12 xl:max-w-[445px] xl:items-start xl:gap-20 xl:mt-2">
          <div
            className="flex flex-col gap-4 text-s leading-s font-semibold text-gray/50 md:flex-row xl:order-1 xl:flex-col xl:items-start xl:gap-3 relative pattern"
            style={{ '--current-tab': currentTabIndex }}
          >
            {tabButtons}
          </div>
          <SwitchTransition>
            <CSSTransition key={currentTabIndex} classNames="slide" timeout={300}>
              <div className="flex flex-col items-center text-center max-w-[457px] xl:items-start xl:text-left">
                <h2 className="text-[2rem] leading-[2.5rem] tracking-[-0.4px] font-bold md:text-l md:leading-l md:tracking-l">
                  {currentTab.title}
                </h2>
                <p className="mt-3 mb-7 md:mt-5 md:mb-[3.75rem] xl:mb-5 xl:min-h-[130px]">{currentTab.text}</p>
                <Button to="/reservation">Book a table</Button>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </section>
  )
}
