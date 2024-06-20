"use client"

import React, { useState } from 'react'
import Card from './Card'
import { staticData } from '@public/data/data';

export default function CardContainer() {
    const [currentIndex, setCurrentIndex] = useState(0);


    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === staticData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? staticData.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className='md:p-28 py-10 p-5 sm:p-10 flex flex-col relative max-w-[1500px] w-full lg:m-auto'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-2xl'>
                    Popular
                </h1>
                <div className='flex-end mb-10  text-center'>
                    <button className='text-center bg-black text-white rounded-lg py-2 px-4 font-medium shadow-lg'>See More</button>
                </div>
            </div>
            <div className='flex gap-x-10 gap-y-20 flex-wrap justify-center items-center w-full'>

                {staticData.map((guitar) => (
                    <div key={guitar.id} className="">
                        <Card key={guitar.id} guitar={guitar} />
                    </div>

                ))}
            </div>
        </div>

    )
}
