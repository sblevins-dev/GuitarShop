"use client"

import { staticData } from '@public/data/data'
import Image from 'next/image'
import React from 'react'
import guitarImg from "@public/assets/images/guitar2.png"
import NextButton from '@components/ui/NextButton'
import { redirect } from 'next/navigation'
import { useCart } from '@context/GlobalContext'

export default function page({
    params
}: {
    params: { productId: number }
}) {

    const guitar = staticData.find((product: { id: number }) => product.id == params.productId)

    if (!guitar) {
        redirect('/');
    }

    return (
        <div className='min-h-screen bg-[#fbfbfb] py-10 p-5 text-black pt-24  flex flex-col justify-between gap-24 max-sm:px-5 md:px-20 2xl:px-96 px-5'>

                <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold text-md'>
                        Electric Guitar
                    </h1>
                    <h1 className='font-bold text-2xl'>
                        {guitar?.title}
                    </h1>
                    {/* <p className='font-medium'>
                        {guitar?.description}
                    </p> */}
                </div>
                <div
                    className='flex flex-wrap-reverse justify-center max-sm:min-w-full max-sm:justify-end h-auto p-4 gap-10 max-sm:gap-2 pr-48 max-sm:pr-0 md:pr-0'
                >
                    <p className='font-medium h-min lg:max-w-[500px] md:max-w-[300px]'>
                        {guitar?.description}
                    </p>
                    <div className='flex flex-col gap-2 justify-end'>
                        {
                            guitar?.salePrice &&
                            <div className='text-right'>
                                <span className='font-semibold uppercase text-red-500 text-md pr-5'>was</span>
                                <span className='font-semibold text-xl text-red-500 line-through text-right font-serif'>
                                    ${guitar?.salePrice}
                                </span>
                            </div>

                        }
                        <span className='font-semibold text-3xl text-right font-serif text-right max-sm:mb-5'>
                            {guitar?.salePrice && <span className='uppercase pr-5 text-lg'>now</span>} ${guitar?.price}
                        </span>

                    </div>

                    {
                        guitar && guitar.img &&
                        <Image
                            src={guitar.img}
                            alt={guitar.title}
                            className='w-auto h-full'
                        />
                    }

                </div>
                <div className='w-full max-w-[1000px] self-center shadow-2xl bg-white flex justify-between items-center px-10 py-5 rounded-lg'>
                    <div className='flex gap-2'>
                        <button>
                            Previous
                        </button>
                        <NextButton id={guitar.id} />
                    </div>
                    <button type="button" className='bg-black text-white py-2 px-4 rounded-lg'>
                        Add to cart
                    </button>
                </div>

        </div>
    )
}
