import React from 'react'
import FeaturedGrid from './ui/FeaturedGrid'

export default function Featured() {
  return (
    <div className='md:px-28 p-5 pb-10 justify-center max-w-[1500px] items-center lg:m-auto'>
      <h1 className='font-bold text-2xl'>
        Featured
      </h1>
      <FeaturedGrid />
    </div>
  )
}
