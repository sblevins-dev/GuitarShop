"use client"

import CartCard from '@components/ui/CartCard';
import { useCart, CartItem } from '@context/GlobalContext'
import { useContext, useEffect, useState } from 'react';

const TotalItems = ({ label, price }: { label: string, price: number }) => {
    return (
        <div className='flex justify-between gap-5 min-w-[200px] max-sm:min-w-full'>
            <span className='font-bold'>{label}:</span>
            <span className='font-medium'>
                {price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                })}
            </span>
        </div>

    )
}

export default function Cart() {
    const { cart, addItem, removeItem } = useCart();

    const [subtotal, setSubtotal] = useState(0.0);

    

    useEffect(() => {
        // Function to calculate the total price of items in the cart
    const calculateTotal = (): number => {
        return cart.reduce((total: number, item: CartItem) => total + parseFloat(item.price), 0);
    };

        setSubtotal(calculateTotal());
    }, [cart])

    return (
        <div className='min-h-screen py-20 p-5 md:p-28 2xl:px-96 bg-[#fbfbfb] text-black flex flex-col gap-10'>
            <h1 className='font-bold text-4xl'>
                Cart
            </h1>
            <div className='flex flex-row max-sm:flex-col gap-10 2xl:gap-20 items-start justify-center'>
                <div className='flex flex-col gap-5 w-full'>
                    {cart.length > 0 ? cart.map(item => (
                        <CartCard key={item.id} guitar={item} />
                    )) : (
                        <div>
                            No Items in your cart yet!
                        </div>
                    )}
                </div>


                <div className='flex flex-col gap-2 items-end max-sm:min-w-full'>
                    <TotalItems label='Subtotal' price={subtotal} />
                    <TotalItems label='Taxes' price={parseFloat((subtotal * .07).toFixed(2))} />
                    <TotalItems label='Total' price={parseFloat((subtotal + (subtotal * .07)).toFixed(2))} />
                    {cart.length > 0 &&
                        <button type="button" className='bg-black py-2 px-4 mt-5 text-white rounded-lg w-max max-sm:w-full hover:bg-gray-200 hover:text-black hover:shadow-xl'>
                            Continue to Checkout
                        </button>
                    }

                </div>
            </div>

        </div>
    )
}
