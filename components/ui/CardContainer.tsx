import React from 'react'
import Card from './Card'
import { InfiniteMovingCards } from './infinite-moving-cards'

export default function CardContainer() {
    return (
        <div className='p-28 py-10 flex flex-col'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-2xl'>
                    Popular
                </h1>
                <div className='flex-end mb-10  text-center'>
                    <button className='text-center bg-black text-white rounded-lg py-2 px-4 font-medium shadow-lg'>See More</button>
                </div>
            </div>


            <div className='flex gap-x-10 gap-y-20 flex-wrap justify-center items-center w-full relative '>

                {staticData.map((guitar) => (
                    <Card key={guitar.id} guitar={guitar} />
                ))}
                {/* <InfiniteMovingCards
        items={staticData}
        direction='right'
        speed="fast"
      /> */}
            </div>
        </div>

    )
}

const staticData = [
    {
        id: 1,
        img: "guitar",
        title: "Stratocaster",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti?",
        price: "189.99"
    },
    {
        id: 2,
        img: "guitar",
        title: "Stratocaster",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti?",
        price: "189.99"
    },
    {
        id: 3,
        img: "guitar",
        title: "Stratocaster",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti?",
        price: "189.99"
    },
    {
        id: 4,
        img: "guitar",
        title: "Stratocaster",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti?",
        price: "189.99"
    },
    {
        id: 5,
        img: "guitar",
        title: "Stratocaster",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti?",
        price: "189.99"
    },
    {
        id: 6,
        img: "guitar",
        title: "Stratocaster",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, deleniti?",
        price: "189.99"
    }
]
