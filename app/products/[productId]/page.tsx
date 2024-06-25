"use client"
import React from 'react'
import GuitarDetails from '@components/GuitarDetails'

export default function page({
    params
}: {
    params: { productId: number }
}) {
    

    return (
        <div className='min-h-screen bg-[#fbfbfb] py-10 p-5 text-black pt-24'>
            <GuitarDetails params={params} />
        </div>
    )
}
