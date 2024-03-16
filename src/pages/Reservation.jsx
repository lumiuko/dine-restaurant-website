import { useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import Select from '@/components/Select'
import Input from '@/components/Input'
import Button from '@/components/Button'

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

export default function Reservation() {
  const formRef = useRef(null)

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm()

  function onSubmit(data) {
    console.log(data)
    reset()
  }

  function goToForm() {
    formRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <section className="px-6 pt-14 bg-booking-mobile bg-cover mb-[33.375rem] md:px-10 md:bg-booking-tablet md:mb-[27.1875rem] xl:bg-booking-desktop xl:pt-16 xl:mb-0">
        <div className="max-w-container mx-auto">
          <div className="flex justify-center md:justify-start">
            <Link to="/" aria-label="Go back to homepage">
              <img src="/logo.svg" className="h-[32px] md:h-[40px]" alt="Dine logo" />
            </Link>
          </div>
          <div className="mt-11 flex flex-col justify-between gap-[5.625rem] items-center md:gap-[2.375rem] md:mt-[4.375rem] xl:mt-[9.625rem] xl:flex-row xl:items-start">
            <div className="text-center text-white xl:max-w-[445px] xl:text-left">
              <h1 className="text-[2rem] leading-[2.5rem] tracking-[-0.4px] font-light md:text-l md:leading-[4rem] md:tracking-[-0.6px] xl:text-xl xl:leading-xl xl:tracking-xl">
                Reservations
              </h1>
              <p className="mt-3 mb-5 md:max-w-[573px] md:mb-0 xl:mt-[1.125rem]">
                We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be
                happy to accommodate you.
              </p>
              <div className="md:hidden">
                <Button isButton isTransparent onClick={goToForm}>
                  Reserve place
                </Button>
              </div>
            </div>
            <div className="relative w-full max-w-[540px] mb-[-28rem] md:-mb-80 xl:mb-[-12.75rem]">
              <form
                autoComplete="off"
                className="relative z-10 bg-white p-8 flex flex-col gap-[2.125rem] text-m leading-s shadow-default md:p-12 "
                onSubmit={handleSubmit(onSubmit)}
                ref={formRef}
              >
                <div className="flex flex-col">
                  <Input
                    {...register('name', { required: true })}
                    type="text"
                    placeholder="Name"
                    isError={!!errors.name}
                    aria-label="Your name"
                  />
                  {errors.name && <p className="mt-3 ml-4 text-[0.625rem] leading-[0.5625rem] text-red">This field is required</p>}
                </div>
                <div className="flex flex-col">
                  <Input
                    {...register('email', { required: true, pattern: emailRegex })}
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    isError={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-3 ml-4 text-[0.625rem] leading-[0.5625rem] text-red">Please use a valid email address</p>
                  )}
                </div>

                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div style={{ color: Object.values(errors.date ?? {}).some(Boolean) ? '#B54949' : '' }}>
                    <p className=" md:flex-shrink-0">Pick a date</p>
                    {Object.values(errors.date ?? {}).some(Boolean) && (
                      <p className="leading-[1rem] text-[0.625rem] xl:leading-[0.5625rem]">This field is incomplete</p>
                    )}
                  </div>
                  <div className="flex gap-[0.875rem] md:max-w-[290px] md:gap-4">
                    <Input
                      {...register('date.month', { required: true, min: 1, max: 12 })}
                      type="number"
                      placeholder="MM"
                      aria-label="Month"
                      isError={!!errors.date?.month}
                    />
                    <Input
                      {...register('date.day', { required: true, min: 1, max: 31 })}
                      type="number"
                      placeholder="DD"
                      aria-label="Day"
                      isError={!!errors.date?.day}
                    />
                    <Input
                      {...register('date.year', { required: true, min: new Date().getFullYear(), max: new Date().getFullYear() + 1 })}
                      type="number"
                      placeholder="YYYY"
                      aria-label="Year"
                      isError={!!errors.date?.year}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-col" style={{ color: Object.values(errors.time ?? {}).some(Boolean) ? '#B54949' : '' }}>
                    <p className="md:flex-shrink-0">Pick a time</p>
                    {Object.values(errors.time ?? {}).some(Boolean) && (
                      <p className="leading-[1rem] text-[0.625rem] xl:leading-[0.5625rem]">This field is incomplete</p>
                    )}
                  </div>
                  <div className="flex gap-[0.875rem] md:max-w-[290px] md:gap-4">
                    <Input
                      {...register('time.hour', { required: true, min: 1, max: 12 })}
                      type="number"
                      placeholder="09"
                      aria-label="Hour"
                      isError={!!errors.time?.hour}
                    />
                    <Input
                      {...register('time.minute', { required: true, min: 0, max: 59 })}
                      type="number"
                      placeholder="00"
                      aria-label="Minute"
                      isError={!!errors.time?.minute}
                    />
                    <Controller
                      control={control}
                      name="time.type"
                      defaultValue="AM"
                      render={({ field: { value, onChange } }) => <Select value={value} onChange={onChange} items={['AM', 'PM']} />}
                    />
                  </div>
                </div>
                <Controller
                  control={control}
                  name="numberOfPeople"
                  defaultValue={4}
                  render={({ field: { value, onChange } }) => (
                    <div className="flex justify-between items-center px-5 pb-4 border-b border-line md:mt-1">
                      <button
                        type="button"
                        aria-label="Decrease people count"
                        onClick={() => onChange(value > 1 ? value - 1 : value)}
                        disabled={value <= 1}
                      >
                        <img src="/icons/icon-minus.svg" alt="" aria-hidden="true" />
                      </button>
                      <p className="text-[#151515] leading-m font-bold">
                        {value} {value === 1 ? 'person' : 'people'}
                      </p>
                      <button
                        type="button"
                        aria-label="Increase people count"
                        onClick={() => onChange(value < 10 ? value + 1 : value)}
                        disabled={value >= 10}
                      >
                        <img src="/icons/icon-plus.svg" alt="" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                />
                <Button isButton isSmall>
                  Make reservation
                </Button>
              </form>
              <img src="/patterns/pattern-lines.svg" className="hidden absolute xl:block bottom-[-2.375rem] -left-20" alt="" />
            </div>
          </div>
        </div>
      </section>
      <img src="/patterns/pattern-curve-bottom-right.svg" className="hidden xl:block" alt="" />
    </main>
  )
}
