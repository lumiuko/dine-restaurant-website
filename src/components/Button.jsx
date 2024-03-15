import { Link } from 'react-router-dom'

export default function Button({ isButton, to, isTransparent, children, isSmall, ...props }) {
  const classNames = `inline-block uppercase py-6 font-semibold text-s leading-[1rem] tracking-s text-white ring-1 hover:text-cod-gray transition-colors ${
    isTransparent ? 'bg-transparent ring-white hover:bg-white ' : 'bg-cod-gray ring-cod-gray hover:bg-white'
  } ${isSmall ? 'px-4' : 'px-[3.375rem]'}`

  return isButton ? (
    <button className={classNames} {...props}>
      {children}
    </button>
  ) : (
    <Link to={to} className={classNames} {...props}>
      {children}
    </Link>
  )
}
