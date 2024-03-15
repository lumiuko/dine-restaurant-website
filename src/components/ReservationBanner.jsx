import Button from '@/components/Button'

export default function ReservationBanner() {
  return (
    <section className="px-6 pt-[5.25rem] pb-20 bg-ready-mobile bg-cover text-white md:px-10 md:pt-[4.5rem] md:pb-16 md:bg-ready-tablet xl:bg-ready-desktop xl:py-[5.5rem]">
      <div className="max-w-container mx-auto flex flex-col justify-between items-center text-center gap-5 md:gap-6 xl:flex-row">
        <h2 className="text-[2rem] leading-[2.5rem] tracking-[-0.4px] font-bold md:text-l md:leading-l md:tracking-l">
          Ready to make a reservation?
        </h2>
        <Button to="/reservation" isTransparent>
          Book a table
        </Button>
      </div>
    </section>
  )
}
