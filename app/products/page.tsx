import ProductCards from '@components/ProductCards'
import React from 'react'

export default function Products() {
  return (
    <div className='min-h-screen py-20 p-5 md:p-28 2xl:px-96 bg-[#fbfbfb] text-black flex flex-col gap-10'>
      <h1 className='font-bold text-4xl'>
        Products
      </h1>
      <ProductCards />
    </div>
  )
}
