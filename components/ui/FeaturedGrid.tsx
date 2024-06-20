import Image from 'next/image'
import React from 'react'
import fAcoustic from "@public/assets/images/fAcoustic.jpg"
import fPlug from "@public/assets/images/fPlug.jpg"
import fDessert from "@public/assets/images/fDessert.jpg"

export default function FeaturedGrid() {
    return (
        <div className='flex justify-center w-full gap-6 p-5 py-10'>
            <div className='rounded-lg flex-1 overflow-clip max-w-[500px]'>
                <Image
                    src={fAcoustic}
                    
                    className='w-full h-full'
                    alt="acoustic guitar"
                />
            </div>
            <div className='flex flex-col flex-1 gap-6'>
                <div className='rounded-lg overflow-clip flex-1'>
                    <Image
                        src={fPlug}
                        
                        className='w-full h-full'
                        alt="acoustic guitar"
                    />
                </div>
                <div className='rounded-lg overflow-clip flex-1'>
                    <Image
                        src={fDessert}
                        
                        className='w-full h-full'
                        alt="acoustic guitar"
                    />
                </div>
            </div>
        </div>
    )
}
