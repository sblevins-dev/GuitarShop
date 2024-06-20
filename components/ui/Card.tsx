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
        <div className="rounded-lg w-auto max-w-[300px] shadow-xl border border-gray-100 p-4">
            <Image
                src={guitarImg}
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
                <p className="text-sm">
                    {guitar.description}
                </p>
            </div>

        </div>
    )
}
