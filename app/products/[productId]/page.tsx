import React from 'react'
import GuitarDetails from '@components/GuitarDetails'
import { generateStaticParams } from '@utils/generateStaticParams'

export default function page({
    params
}: {
    params: { productId: number }
}) {
    
    const { productId } = params

    return (
        <div className='min-h-screen bg-[#fbfbfb] py-10 p-5 text-black pt-24'>
            <GuitarDetails prodId={productId} />
        </div>
    )
}

export { generateStaticParams }
