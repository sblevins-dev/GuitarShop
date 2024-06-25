"use client"

import CartCard from '@components/ui/CartCard';
import { useCart, CartItem } from '@context/GlobalContext'
import { useContext } from 'react';

const TotalItems = ({ label, price }: { label: string, price: number }) => {
    return (
        <div className='flex justify-between gap-5 min-w-[200px] max-sm:min-w-full'>
            <span className='font-bold'>{label}:</span>
            <span className='font-medium'>
                ${price}
            </span>
        </div>

    )
}

export default function Cart() {
    const { cart, addItem, removeItem } = useCart();

    // Function to calculate the total price of items in the cart
    const calculateTotal = (): number => {
        return cart.reduce((total: number, item: CartItem) => total + parseFloat(item.price), 0);
    };

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
                    <TotalItems label='Subtotal' price={calculateTotal()} />
                    <TotalItems label='Taxes' price={parseFloat((calculateTotal() * .07).toFixed(2))} />
                    <TotalItems label='Total' price={parseFloat((calculateTotal() + (calculateTotal() * .07)).toFixed(2))} />
                    {cart.length > 0 &&
                        <button type="button" className='bg-black py-2 px-4 mt-5 text-white rounded-lg w-max max-sm:w-full'>
                            Continue to Checkout
                        </button>
                    }

                </div>
            </div>

        </div>
    )
}
