import type { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import TheFooter from "./theFooter"
import TheHeader from "./theHeader"

export default function Layouts(): ReactElement {
  return (
    <>
      <TheHeader />
      <Navbar />
      <Sidebar />
      
      <Outlet />

      <TheFooter />
    </>
  )
}