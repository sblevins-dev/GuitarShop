"use client"

import Image, { StaticImageData } from 'next/image';
import delIcon from "@public/assets/icons/delete.png"
import { useCart } from '@context/GlobalContext';

export default function CartCard({ guitar }: {
    guitar: {
        id: number;
        title: string;
        description: string;
        price: string;
        salePrice: string | null;
        img: StaticImageData;
        quantity: number;
    }
}) {
    const { removeItem } = useCart();

    return (
        <div className='w-full bg-white shadow-lg p-4 rounded-lg flex flex-wrap gap-4 justify-between items-center'>
            <h1 className='font-bold min-w-[400px] max-sm:min-w-full max-w-[400px]'>
                {guitar.title}
            </h1>
            <div className=''>
                <Image
                    src={guitar.img}
                    alt={guitar.title}
                    className='w-auto h-20'
                />
            </div>
            <div className='font-medium w-20'>
                {parseFloat(guitar.price).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                })}
            </div>
            <div
                className='p-2 cursor-pointer'
                onClick={() => removeItem(guitar.id)}
            >
                <Image
                    src={delIcon}
                    alt={"remove from cart"}
                    className='w-auto h-6'

                />
            </div>
        </div>
    )
}
