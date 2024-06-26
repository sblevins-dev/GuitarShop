"use client"

import Link from "next/link"
import cartIcon from "@public/assets/icons/cart.png"
import Image from "next/image"
import { usePathname } from "next/navigation"
import hamburger from "@public/assets/icons/hamburger.png"
import { useEffect, useState } from "react"
import { useCart } from "@context/GlobalContext"

export default function Nav() {
  const pathName = usePathname();

  const { cart } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    }

    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isMenuOpen])



  return (
    <div className='text-black flex justify-between items-center bg-transparent p-4 absolute z-10 w-full 2xl:px-96 max-sm:fixed max-sm:bg-white max-sm:shadow-lg'>
      <h1 className='uppercase font-bold'>
        The Guitar Shop
      </h1>

      <div className='flex gap-4 max-sm:hidden'>
        {navItems.map((item) => (
          <Link key={item.id} href={item.link} className={`cursor-pointer font-medium ${pathName == item.link && 'active'}`}>
            {item.title}
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 max-sm:hidden">
        <div className="min-w-[50px]">
        </div>
        <button type="button" className="bg-black hover:bg-gray-200 hover:shadow-xl hover:text-black font-medium rounded-lg text-white px-2 py-0.5 transition-all duration-300">
          Login
        </button>

        <Link href={'/cart'}>
          <div className="h-max hover:bg-gray-200 rounded-lg transition duration-300 p-2 cursor-pointer relative">
            {cart.length > 0 &&
              <div className="absolute -top-2 -right-2 bg-black text-white w-[20px] h-[20px] rounded-full flex items-center justify-center text-xs">
                {cart.length}
              </div>
            }
            <Image
              src={cartIcon}
              alt="cart"
              className="w-auto h-[20px]"
            />
          </div>
        </Link>

      </div>

      {!isMenuOpen &&
        <div className="max-sm:block hidden">
          <Image
            src={hamburger}
            alt={"menu icon"}
            className="w-auto h-[20px]"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>}


      {
        isMenuOpen &&
        <div className="absolute right-0 top-0 bg-white py-5 px-2 shadow-2xl">
          <div className="relative top-0 left-0">
            <Image
              src={hamburger}
              alt={"menu icon"}
              className="w-auto h-[20px]"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <div className='flex flex-col gap-4 pl-2 pr-5 pt-5'>
            {navItems.map((item) => (
              <Link key={item.id} href={item.link} className={`cursor-pointer font-medium ${pathName == item.link && 'active'}`}>
                {item.title}
              </Link>
            ))}
            <Link href="/cart" className={`cursor-pointer font-medium flex justify-between items-center ${pathName == '/cart' && 'active'}`}>
              Cart
              {cart.length > 0 &&
                <div className=" bg-black text-white w-[20px] h-[20px] rounded-full flex items-center justify-center text-xs">
                  {cart.length}
                </div>
              }
            </Link>
          </div>
        </div>
      }
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
