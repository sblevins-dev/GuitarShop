import Image from 'next/image'
import React from 'react'
import fAcoustic from "@public/assets/images/fAcoustic.jpg"
import fPlug from "@public/assets/images/fPlug.jpg"
import fDessert from "@public/assets/images/fDessert.jpg"

export default function FeaturedGrid() {
    return (
        <div className='flex justify-center w-full gap-6 p-5 max-sm:px-0 py-10'>
            <div className='rounded-lg flex-1 overflow-clip max-w-[500px] relative group'>
                <Image
                    src={fAcoustic}

                    className='w-full h-full group-hover:opacity-50 transition-opacity duration-300'
                    alt="acoustic guitar"
                />
                <div className="absolute px-6 p-2 max-sm:px-2 pt-20 max-sm:pt-10 inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                    <div className='flex flex-col items-end gap-4 max-sm:gap-1 xl:pt-20'>
                        <span className='text-white font-bold text-6xl max-sm:text-lg xl:text-7xl max-md:text-4xl'>Without music, life would be a mistake.</span>
                        <span className='text-white font-semibold text-xl max-sm:text-sm text-right 2xl:text-3xl'>- Friedrich Nietzsche</span>
                    </div>
                    <span className='text-white text-right absolute bottom-2 right-2  font-semibold text-md max-sm:text-xs'>
                        Photo by <a className='text-[#334eff]' href="https://unsplash.com/@luwadlinbosman?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Luwadlin Bosman</a> on <a className='text-[#334eff]' href="https://unsplash.com/photos/grayscale-photo-of-acoustic-guitar-vWqS1iTz0hg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </span>
                </div>
            </div>
            <div className='flex flex-col flex-1 gap-6'>
                <div className='rounded-lg overflow-clip flex-1 relative group'>
                    <Image
                        src={fPlug}

                        className='w-full h-full group-hover:opacity-50 transition-opacity duration-300'
                        alt="acoustic guitar"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                        <div className='flex flex-col items-end gap-4 p-4 max-sm:gap-0 max-sm:p-2 pt-10'>
                            <span className='text-white font-bold text-4xl max-sm:text-xs 2xl:text-6xl max-lg:text-2xl'>WA guitar is like an old friend that is there with me.</span>
                            <span className='text-white font-semibold text-xl max-sm:text-xs text-right xl:text-4xl'>- B.B. King</span>
                        </div>
                        <span className='text-white text-right absolute bottom-2 right-2  font-semibold text-md max-sm:text-xs'>
                            Photo by <a className='text-[#334eff]' href="https://unsplash.com/@juandinella?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Juan Di Nella</a> on <a className='text-[#334eff]' href="https://unsplash.com/photos/a-black-and-white-shot-of-a-wire-plugged-in-into-a-guitar-OUgLA2unwtg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                        </span>
                    </div>

                </div>
                <div className='rounded-lg overflow-clip flex-1 relative group'>
                    <Image
                        src={fDessert}

                        className='w-full h-full group-hover:opacity-50 transition-opacity duration-300'
                        alt="acoustic guitar"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex text-center pt-10 max-sm:pt-5 justify-center">

                        <span className='text-white font-bold text-6xl max-sm:text-lg xl:text-7xl xl:pt-10 2xl:pt-20 max-md:text-2xl'>Feel the music.</span>
                        <span className='text-white text-right absolute bottom-2 right-2  font-semibold text-md max-sm:text-xs'>
                        Photo by <a className='text-[#334eff]' href="https://unsplash.com/@kimberlyrichards?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kimberly Richards</a> on <a className='text-[#334eff]' href="https://unsplash.com/photos/silhouette-of-person-with-guitar-ERSauUNQ3ag?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
