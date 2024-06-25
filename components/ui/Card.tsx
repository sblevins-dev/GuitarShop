"use client"

import { useCart } from "@context/GlobalContext"
import useIntersectionObserver from "@hooks/IntersectionObserver"
import guitarImg from "@public/assets/images/guitar2.png"
import { images } from "@public/assets/images/index"
import Image, { StaticImageData } from "next/image"

export default function Card({
    guitar,
    delay
}: {
    guitar: {
        id: number;
        title: string;
        description: string;
        price: string;
        salePrice: string | null;
        img: StaticImageData;
    },
    delay: number;
}) {

    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.01,
        freezeOnceVisible: true,
    })

    const shortenedTitle = guitar.title.split(' ').slice(0, 7).join(' ');

    const shortenedDesc = guitar.description.split(' ').slice(0, 7).join(' ') + '...';

    const { cart, addItem, removeItem } = useCart();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        addItem({ ...guitar, quantity: 1 });
    }

    const handleRemoveFromCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        removeItem(guitar.id);
    }

    const checkCart = () => {
        let flag = false;

        cart.forEach(item => {
            if (item.id == guitar.id) flag = true;
        })

        return flag;
    }


    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`cursor-pointer bg-white rounded-lg w-auto max-w-[300px] max-sm:max-w-full 
        min-w-[300px] max-sm:min-w-full min-h-[500px] shadow-xl border 
        border-gray-100 p-4 flex flex-col gap-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {
                guitar.img &&
                <Image
                    src={guitar.img}
                    priority={true}
                    alt="guitar"
                    className="w-full h-full mb-2"
                />
            }

            <div
                className="w-full flex flex-col gap-1"
            >
                <h2 className="font-bold text-right text-sm min-h-[40px]">
                    {shortenedTitle}
                </h2>
                <p className="text-right font-medium justify-end gap-2 flex">
                    <span className="text-red-500 line-through">
                        {guitar.salePrice !== null && `${parseFloat(guitar.salePrice).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        })}`}
                    </span>
                    <span>
                        {parseFloat(guitar.price).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        })}
                    </span>

                </p>
                <p className="text-sm font-medium min-h-[40px] max-h-[40px] overflow-hidden">
                    {shortenedDesc}
                </p>
            </div>
            {checkCart()
                ? <button
                    type="button"
                    className="font-semibold transition-all duration-300 bg-red-500 text-white 
        p-2 rounded-lg w-full mt-4 hover:shadow-xl hover:bg-gray-200 hover:text-black"
                    onClick={handleRemoveFromCart}
                >
                    Remove from Cart
                </button>
                :
                <button
                    type="button"
                    className="font-semibold transition-all duration-300 bg-black text-white 
                p-2 rounded-lg w-full mt-4 hover:shadow-xl hover:bg-gray-200 hover:text-black"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>}


        </div>
    )
}
