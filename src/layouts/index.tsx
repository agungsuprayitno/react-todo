import { ReactElement } from 'react'
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import TheFooter from "./theFooter"
import TheHeader from "./theHeader"

export default function Layouts(): ReactElement {
  return (
    <>
      <Navbar />
      <Sidebar />
      <TheFooter />
      <TheHeader />
    </>
  )
}