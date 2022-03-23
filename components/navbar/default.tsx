import Link from 'next/link'
import {
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
  MenuAlt3Icon,
} from '@heroicons/react/outline'
import React from 'react'
interface props {
  openSidebar: Function
}
const Navbar = ({ openSidebar }: props): React.ReactNode => {
  return (
    <nav className="px-4 py-3 shadow-sm max-w-screen-2xl mx-auto space-y-2">
      <div className="flex">
        <div className="flex-1 flex  items-center gap-4 text-lg">
          <Link href="/">Logo</Link>
          <div className="space-x-3 text-gray-500 hidden lg:block ">
            <Link href="/search">
              <a className="hover:text-black">Search</a>
            </Link>
            <Link href="/apparel">
              <a className="hover:text-black">Apparel</a>
            </Link>
            <Link href="/">
              <a className="hover:text-black">All</a>
            </Link>
          </div>
        </div>
        <form className="flex-1 bg-gray-300 hidden lg:block">
          <input
            type="search"
            name=""
            id=""
            className="w-full px-4 py-2 ring-1 ring-slate-400 rounded-sm outline-none  focus:ring-2"
            placeholder="Search for products..."
          />
        </form>
        <div className="flex-1 items-center justify-end gap-3 flex">
          <button className=" hover:scale-110 transition duration-200 cursor-pointer bg-gray-200 p-1.5  rounded-md">
            <ShoppingCartIcon className="h-6 w-6 text-gray-500" />
          </button>
          <Link href="/wishlist">
            <a className=" p-1.5 bg-gray-200 rounded-md hover:scale-110 transition duration-200">
              <HeartIcon className="h-6 w-6  text-gray-500" />
            </a>
          </Link>
          <button className=" hover:scale-110 transition duration-200 cursor-pointer p-1.5 bg-gray-200 rounded-md">
            <UserIcon className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className=" hover:scale-110 transition duration-200 cursor-pointer lg:hidden bg-gray-200 rounded-md  p-1.5"
            onClick={openSidebar()}
          >
            <MenuAlt3Icon className=" text-gray-500 h-6 w-6" />
          </button>
        </div>
      </div>
      <form className="w-full bg-gray-300  lg:hidden">
        <input
          type="search"
          name=""
          id=""
          className="w-full px-4 py-2 ring-1 ring-slate-400 rounded-sm outline-none  focus:ring-2"
          placeholder="Search for products..."
        />
      </form>
    </nav>
  )
}

export default Navbar
