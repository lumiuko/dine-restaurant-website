import { forwardRef } from 'react'

const Input = forwardRef(({ isError, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`min-w-0 px-4 pb-[0.875rem] border-b border-line focus:border-cod-gray focus:outline-none transition-colors ${
        isError ? 'border-red text-red focus:border-red placeholder:text-red/50' : ''
      }`}
      {...props}
    />
  )
})

Input.displayName = 'Input'
export default Input
