import Link from 'next/link'
import {
  BsBagCheck,
  BsSuitHeart,
  BsPerson,
  HiMenuAlt3,
  FiSearch,
} from 'react-icons/all'
const Navbar = (): JSX.Element => {
  return (
    <nav className="px-5 shadow-sm w-full">
      <div className="flex w-full py-4">
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
          <button className="hover:scale-110 duration-200 transition lg:hidden">
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </div>
      <form className="w-full lg:hidden relative">
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-sm  outline-gray-300  focus:outline-2 pr-10"
          placeholder="Search for products..."
        />
        <FiSearch
          className="absolute right-3 top-1/2 -translate-y-1/2"
          size={22}
        />
      </form>
    </nav>
  )
}

export default Navbar
