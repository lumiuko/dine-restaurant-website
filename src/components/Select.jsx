import { Listbox, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const transition = {
  enter: 'transition transition-all duration-150 ease-out',
  enterFrom: 'translate-y-2 opacity-0',
  enterTo: 'translate-y-0 opacity-100',
  leave: 'transition transition-all duration-150 ease-out',
  leaveFrom: 'translate-y-0 opacity-100',
  leaveTo: 'translate-y-2 opacity-0'
}

export default function Select({ value, onChange, items }) {
  return (
    <Listbox as="div" className="relative" value={value} onChange={onChange}>
      <Listbox.Button as={Fragment}>
        {({ open }) => (
          <button className="min-w-[88px] px-4 pb-[0.875rem] border-b border-line focus:border-cod-gray focus:outline-none transition-colors flex justify-between items-center">
            <span>{value}</span>
            <img
              src="/icons/icon-arrow.svg"
              className="w-[16px] transition-all"
              alt=""
              aria-hidden="true"
              style={{ rotate: open ? '180deg' : '' }}
            />
          </button>
        )}
      </Listbox.Button>
      <Transition {...transition}>
        <Listbox.Options className="absolute w-[105px] translate-y-2 flex flex-col p-4 pr-[1.875rem] bg-white shadow-dropdown">
          {items.map(item => (
            <Listbox.Option key={item} value={item} className="flex items-center gap-4 cursor-pointer">
              {({ selected, active }) => (
                <>
                  <img src="/icons/icon-check.svg" alt="" aria-hidden="true" style={{ opacity: selected ? '1' : '0' }} />
                  <span style={{ color: active ? '#9E7F66' : '' }}>{item}</span>
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  )
}
