"use client"

import guitarImg from "@public/assets/images/guitar2.png"
import Image from "next/image"

export default function Card({
    guitar
}: {
    guitar: {
        id: number;
        title: string;
        description: string;
        price: string | null;
        salePrice: string | null;
    }
}) {

    const shortenedTitle = guitar.title.split(' ').slice(0, 7).join(' ');

    const shortenedDesc = guitar.description.split(' ').slice(0, 7).join(' ') + '...';

    console.log(shortenedDesc)

    return (
        <div 
        className="cursor-pointer bg-white rounded-lg w-auto max-w-[300px] max-sm:max-w-full 
        min-w-[300px] min-h-[500px] shadow-xl hover:shadow-2xl transition duration-300 border 
        border-gray-100 p-4 flex flex-col gap-1">
            <Image
                src={guitarImg}
                priority={true}
                alt="guitar"
                className="w-full h-full mb-2"
            />
            <div
                className="w-full flex flex-col gap-1"
            >
                <h2 className="font-bold text-right text-sm min-h-[40px]">
                    {shortenedTitle}
                </h2>
                <p className="text-right font-medium justify-end gap-2 flex">
                    <span className="text-red-500 line-through">
                        {guitar.salePrice !== null && `$${guitar.salePrice}`}
                    </span>
                    <span>
                       ${guitar.price} 
                    </span>
                    
                </p>
                <p className="text-sm font-medium min-h-[40px] max-h-[40px] overflow-hidden">
                    {shortenedDesc}
                </p>
            </div>
            <button type="button"
                className="font-semibold transition-all duration-300 bg-black text-white 
                p-2 rounded-lg w-full mt-4 hover:shadow-2xl hover:bg-white hover:text-black 
                border hover:border-black"
            >
                Add to Cart
            </button>

        </div>
    )
}
