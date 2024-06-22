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
        img: string;
        price: string;
    }
}) {
    return (
        <div className="cursor-pointer bg-white rounded-lg w-auto max-w-[300px] max-sm:max-w-full min-w-[300px] shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100 p-4">
            <Image
                src={guitarImg}
                priority={true}
                alt="guitar"
                className="w-full h-full mb-2"
            />
            <div
                className="w-full flex flex-col gap-1"
            >
                <h2 className="font-bold text-right">
                    {guitar.title}
                </h2>
                <p className="text-right font-medium">
                    ${guitar.price}
                </p>
                <p className="text-sm font-medium">
                    {guitar.description}
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
