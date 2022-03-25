import { ReactChild } from 'react'
import { Navbar, Footer } from '../components'
interface props {
  children: JSX.Element
}
const Layout = ({ children }: props): JSX.Element => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
