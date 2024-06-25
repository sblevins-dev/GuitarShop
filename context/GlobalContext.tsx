"use client"

import { StaticImageData } from "next/image";
import React, { createContext, useContext, useEffect, useReducer, useState } from "react";

export interface CartItem {
    id: number;
    title: string;
    price: string;
    salePrice: string | null;
    description: string;
    img: StaticImageData;
    quantity: number;
}

interface MyContextType {
    cart: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (itemId: number) => void;
    clearCart: () => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

type Action =
    | { type: 'ADD_TO_CART'; payload: CartItem }
    | { type: 'REMOVE_FROM_CART'; payload: number }
    | { type: 'CLEAR_CART' };

const cartReducer = (state: CartItem[], action: Action): CartItem[] => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Check if item is already in cart
            const existingIndex = state.findIndex(item => item.id === action.payload.id);
            if (existingIndex !== -1) {
                const updatedCart = [...state];
                updatedCart[existingIndex].quantity += action.payload.quantity;
                return updatedCart;
            } else {
                return [...state, action.payload];
            }

        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload);

        case 'CLEAR_CART':
            return [];

        default:
            return state;
    }
};

// Create the provider component
interface ContextProviderProps {
    children: React.ReactNode; // Define children prop explicitly
}

export const MyContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, [], () => {
        const savedCart = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        
    }, [cart])

    const addItem = (item: CartItem) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const removeItem = (itemId: number) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    }

    return (
        <MyContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {children}
        </MyContext.Provider>
    );
};

export const useCart = (): MyContextType => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
