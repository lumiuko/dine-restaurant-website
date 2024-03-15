export default function Footer() {
  return (
    <footer className="bg-cod-gray text-white px-6 pt-20 pb-[4.875rem] md:px-10 md:py-16 xl:py-[4.875rem]">
      <div className="max-w-container mx-auto flex flex-col justify-between items-center gap-[2.625rem] md:flex-row md:items-start">
        <img src="/logo.svg" className="h-[40px]" alt="Dine logo" />
        <div className="flex flex-col gap-8 text-[0.875rem] leading-s tracking-[2px] text-center uppercase md:text-start md:flex-1 md:max-w-[456px] xl:flex-row xl:max-w-[814px] xl:gap-[7.75rem] *:flex-1">
          <p className="*:block xl:max-w-[244px]">
            <span>Marthwaite, Sedbergh</span>
            <span>Cumbria</span>
            <span>+00 44 123 4567</span>
          </p>
          <p className="*:block">
            <span>Open times</span>
            <span>Mon - Fri: 09:00 AM - 10:00 PM</span>
            <span>Sat - Sun: 09:00 AM - 11:30 PM</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
