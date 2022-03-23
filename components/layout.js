import Navbar from './navbar/default'
import Footer from './footer/default'
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
export default Layout
