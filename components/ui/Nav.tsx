"use client"

import Link from "next/link"
import cart from "@public/assets/icons/cart.png"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Nav() {
  const pathName = usePathname();

  return (
    <div className='text-black flex justify-between items-center bg-transparent p-4 absolute z-10 w-full 2xl:px-96'>
      <h1 className='uppercase font-bold'>
        The Guitar Shop
      </h1>
      <div className='flex gap-4'>
        {navItems.map((item) => (
          <Link key={item.id} href={item.link} className={`cursor-pointer font-medium ${pathName == item.link && 'active'}`}>
            {item.title}
            </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 ">
        <div className="min-w-[50px]">
        </div>
        <button type="button" className="bg-black font-medium rounded-lg text-white px-2 py-0.5 transition-all duration-300 border hover:border-black hover:bg-white hover:text-black">
          Login
        </button>
        <div className="h-max hover:bg-gray-200 rounded-lg transition duration-300 p-2 cursor-pointer">
          <Image
            src={cart}
            alt="cart"
            className="w-auto h-[20px]"
          />
        </div>

      </div>
    </div>
  )
}

const navItems = [
  {
    id: 1,
    title: "Home",
    link: "/"
  },
  {
    id: 2,
    title: "Products",
    link: "/products"
  },
  {
    id: 3,
    title: "About",
    link: "/about"
  }
]
