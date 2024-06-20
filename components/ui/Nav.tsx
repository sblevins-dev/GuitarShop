import Link from "next/link"

export default function Nav() {
  return (
    <div className='text-black flex justify-between bg-transparent p-4 absolute z-10 w-full xl:px-96'>
      <h1 className='uppercase font-bold'>
        The Guitar Shop
      </h1>
      <div className='flex gap-4'>
        {navItems.map((item) => (
          <Link key={item.id} href={item.link} className='cursor-pointer font-medium'>{item.title}</Link>
        ))}
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
