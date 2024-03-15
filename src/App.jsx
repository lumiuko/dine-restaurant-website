import { Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import Homepage from './pages/Homepage'
import { Navigate } from 'react-router-dom'
import Reservation from './pages/Reservation'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="reservation" element={<Reservation />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
