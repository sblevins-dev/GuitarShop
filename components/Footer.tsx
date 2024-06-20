import React from 'react'
import facebook from "@public/assets/icons/facebook.png"
import instagram from "@public/assets/icons/instagram.png"
import linkedin from "@public/assets/icons/linkedin.png"
import pinterest from "@public/assets/icons/pinterest.png"
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='p-28 py-10 bg-white text-black flex justify-between items-end xl:px-96'>
      <div className='flex flex-col justify-between gap-4'>
        <h1 className='uppercase font-bold'>
            The Guitar Shop
        </h1>
        <span className='flex gap-4'>
            <Image 
                src={facebook}
                alt="facebook"
                className='w-[25px] h-[25px] cursor-pointer'
            />
            <Image 
                src={instagram}
                alt="instagram"
                className='w-[25px] h-[25px] cursor-pointer'
            />
            <Image 
                src={linkedin}
                alt="linkedin"
                className='w-[25px] h-[25px] cursor-pointer'
            />
            <Image 
                src={pinterest}
                alt="pinterest"
                className='w-[25px] h-[25px] cursor-pointer'
            />
        </span>
      </div>
      <ul className='flex gap-4'>
        {["About Us", "Careers", "Press Releases", "Blog", "Privacy Policy", "Terms & Conditions"].map((item, idx) => (
            <li key={idx} className='font-medium cursor-pointer'>
                {item}
            </li>
        ))}
      </ul>
    </div>
  )
}
