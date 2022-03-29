import { Footer, Navbar } from "../components";

interface props {
  children: JSX.Element;
}

const Layout = ({ children }: props): JSX.Element => {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto">{children}</main>
      {/*<Footer />*/}
    </>
  );
};

export default Layout;
