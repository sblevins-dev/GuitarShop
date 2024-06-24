"use client"

import { staticData } from '@public/data/data'
import Image from 'next/image'
import React from 'react'
import guitarImg from "@public/assets/images/guitar2.png"

export default function page({
    params
}: {
    params: { productId: number }
}) {

    const guitar = staticData.find((product: { id: number }) => product.id == params.productId)

    return (
        <div className='h-screen bg-[#fbfbfb] py-10 p-5 text-black pt-24 items-center flex flex-col justify-center gap-24'>
            <div className='flex gap-6 items-center flex-wrap justify-center'>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold text-md'>
                        Electric Guitar
                    </h1>
                    <h1 className='font-bold text-2xl'>
                        {guitar?.title}
                    </h1>
                    <p className='font-medium'>
                        {guitar?.description}
                    </p>
                </div>
                <div
                    className='w-[300px] h-auto'
                >
                    {/* {guitar && <Image
                        src={guitarImg}
                        alt={guitar.img}
                        className='w-auto h-full'
                    />} */}

                </div>
            </div>
            <div className='w-full max-w-[1000px] shadow-2xl bg-white flex justify-between items-center px-10 py-5 rounded-lg'>
                <div className='flex gap-2'>
                <p>Previous</p>
                    <p>Next</p>
                </div>
                <div>
                    Add to cart
                </div>
            </div>
        </div>
    )
}
