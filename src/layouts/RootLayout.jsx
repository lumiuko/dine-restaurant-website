import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '@/components/Footer'

export default function RootLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}
