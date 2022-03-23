import Navbar from './navbar/default'
import Footer from './footer/default'
import Sidebar from './sidebar/default'
import { useState } from 'react'
const Layout = ({ children }) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false)
  const openSidebar = () => setIsSidebarOpened(true)
  const closeSidebar = () => setIsSidebarOpened(false)
  return (
    <>
      <Navbar openSidebar={openSidebar} />
      {children}
      <Sidebar isSidebarOpened={isSidebarOpened} closeSidebar={closeSidebar} />
      <Footer />
    </>
  )
}
export default Layout
