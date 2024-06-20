"use client"

import { staticData } from '@public/data/data'
import React from 'react'
import Card from './ui/Card'
import { useRouter } from 'next/navigation'

export default function ProductCards() {
    const router = useRouter();

    const handleClick = (id : number) => {
        router.push(`/products/${id}`)
    }

    return (
        <div
            className='flex gap-10 w-full flex-wrap items-center justify-center'
        >
            {staticData.map(guitar => (
                <div key={guitar.id} onClick={() => handleClick(guitar.id)} className='cursor-pointer'>
                    <Card key={guitar.id} guitar={guitar} />
                </div>

            ))}

        </div>
    )
}
