import guitar from "@public/assets/images/guitar2.png"
import Image from "next/image"
import esp from "@public/assets/images/esp.png"

export default function Hero() {
    return (
        <div
            className=' md:max-h-[100vh] max-w-[100vw] w-full h-screen max-sm:min-h-full overflow-hidden 
         max-sm:px-5 md:px-20 3xl:px-96 px-5 flex flex-row max-sm:flex-col justify-center 
        flex-wrap pt-36 max-sm:pt-10 py-20 max-sm:py-5 relative'>


            <div
                className='flex flex-1 flex-col flex-wrap gap-4 items-end max-sm:justify-center relative min-w-[500px] 
                max-sm:min-w-full pr-60 2xl:pr-[800px] max-sm:pr-0 max-sm:max-w-full 2xl:w-full'>

                <h1
                    className='font-extrabold text-4xl sm:text-4xl md:text-7xl text-right font-serif'>
                    ESP LTD
                </h1>
                <div
                    className='flex-2 flex flex-col text-right sm:text-5xl text-2xl font-semibold 
                font-serif w-auto'>
                    <span>$1499.99</span>
                    <span
                        className='font-semibold text-gray-400 line-through sm:text-2xl text-xl font-serif'>
                        $1699.99
                    </span>
                </div>
                <p 
                className='bg-transparent font-semibold text-right text-sm md:text-sm 
                min-w-[200px] w-full max-sm:w-full xl:pl-10 pl-0 max-w-[800px] h-max'>
                    The ESP LTD James Hetfield Snakebyte Electric Guitar is Metallica frontman
                    James Hetfield&apos;s weapon of choice. This modified EX shape guitar features a
                    mahogany body and 3-piece mahogany neck for huge tones suited for the heaviest
                    of metal.
                </p>
            </div>

            <div
                className="absolute max-sm:relative rotate-90 -right-48 max-sm:right-0 top-80 max-sm:top-0 
                2xl:right-96 flex-1 w-auto max-sm:flex-2 max-sm:h-full"
            >
                <Image
                    src={esp}
                    alt="esp guitar"
                    className="w-auto h-full object-cover max-sm:object-contain"
                />
            </div>



            {/* <div className="flex flex-col flex-1 gap-2 pt-28 sm:max-w-[200px] md:max-w-[500px] min-w-[200px] w-full text-right">
                <p className="font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, vel.
                </p>
                <span className="font-bold">
                    Martin Rodriguez
                </span>
            </div> */}

        </div>
    )
}

