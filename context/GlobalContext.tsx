"use client"

import { StaticImageData } from "next/image";
import React, { createContext, useContext, useReducer, useState } from "react";

export interface CartItem {
    id: number;
    title: string;
    price: string;
    salePrice: string;
    description: string;
    img: StaticImageData;
    quantity: number;
}

interface MyContextType {
    cart: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (itemId: number) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

type Action =
    | { type: 'ADD_TO_CART'; payload: CartItem }
    | { type: 'REMOVE_FROM_CART'; payload: number }

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

        default:
            return state;
    }
};

// Create the provider component
interface ContextProviderProps {
    children: React.ReactNode; // Define children prop explicitly
  }

export const MyContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeItem = (itemId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

    return (
        <MyContext.Provider value={{ cart, addItem, removeItem }}>
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
