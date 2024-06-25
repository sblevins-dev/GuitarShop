import { useRouter } from 'next/navigation'
import React from 'react'

export default function NextButton({ id } : { id: number }) {

    const router = useRouter();

    const handleNext = () => {
        router.push(`/products/${id + 1}`)
    }

    return (
        <button type='button' onClick={handleNext}>
            Next
        </button>
    )
}
