import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsBagCheck, BsPerson, BsSuitHeart } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const Navbar = (): JSX.Element => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const handleMenuClick = (): void => {
    setIsMenuOpened(!isMenuOpened);
  };
  // CLOSE MENU WHEN USER CLICKS OUTSIDE OF IT
  return (
    <>
      <nav className="px-5 shadow-sm w-full relative bg-white ">
        <div className="flex w-full h-16 items-center">
          <div className="flex-1 gap-4 flex items-center">
            <Link href="/">
              <a>Logo</a>
            </Link>
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/search">
                <a className="text-gray-600 hover:text-black">All</a>
              </Link>
              <Link href="/search/apparel">
                <a className="text-gray-600 hover:text-black">Apparel</a>
              </Link>
              <Link href="/search/shop-all">
                <a className="text-gray-600 hover:text-black">Shop All</a>
              </Link>
            </div>
          </div>
          <form className="flex-1 hidden lg:block relative ">
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-sm  outline-gray-300  focus:outline-2 pr-10 "
              placeholder="Search for products..."
            />
            <FiSearch
              className="absolute right-3 top-1/2 -translate-y-1/2"
              size={22}
            />
          </form>
          <div className="flex-1 flex justify-end item-center items-center gap-4">
            <Link href="/cart">
              <a className="hover:scale-110 duration-200 transition">
                <BsBagCheck size={24} />
              </a>
            </Link>
            <Link href="/wishlist">
              <a className="hover:scale-110 duration-200 transition">
                <BsSuitHeart size={24} />
              </a>
            </Link>
            <button className="hover:scale-110 duration-200 transition">
              <BsPerson size={26} />
            </button>
            <button
              className="hover:scale-110 duration-200 transition lg:hidden"
              onClick={handleMenuClick}
            >
              <HiMenuAlt3 size={24} />
            </button>
          </div>
        </div>
        <form className="w-full lg:hidden relative">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-sm   outline-gray-300  focus:outline-2 pr-10"
            placeholder="Search for products..."
          />
          <FiSearch
            className="absolute right-3 top-1/2 -translate-y-1/2"
            size={22}
          />
        </form>
        {isMenuOpened && (
          <div className="bg-white shadow-md rounded-sm absolute right-2 top-[3rem] lg:top-full pb-2 lg:hidden z-20 menu">
            <div className="border-b p-3">
              <p className="font-semibold">Welcome</p>
              <p>To access wishlist or cart</p>
              <button className="rounded-md p-2 border mt-1 focus:border-2">
                Sign In
              </button>
            </div>
            <ul className="p-3 space-y-2">
              <li>
                <Link href="/search">
                  <a>Search</a>
                </Link>
              </li>
              <li>
                <Link href="/search/apparel">
                  <a>Apparel</a>
                </Link>
              </li>
              <li>
                <Link href="/search/shop-all">
                  <a>Shop All</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
