import guitar from "@public/assets/images/guitar2.png"
import Image from "next/image"

export default function Hero() {
    return (
        <div className=' max-h-[100vh] max-w-full w-full  h-screen  overflow-hidden justify-center sm:px-10 md:px-20 px-5 flex flex-wrap gap-60 pt-36 py-20'>


                <div className='flex flex-col gap-10 items-end'>

                    <h1 className='font-extrabold text-4xl sm:text-4xl md:text-7xl text-right font-serif'>Telecaster Guitar</h1>

                    <div className="flex  flex-row flex-2 flex-wrap gap-8 justify-center md:items-center xs:items-start max-w-[500px]">
                        <p className='flex-1 font-semibold text-right md:text-sm min-w-[200px] xl:pl-10 pl-0'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ratione!
                        </p>
                        <div className='flex-1 flex flex-col text-right sm:text-5xl text-2xl font-semibold font-serif w-auto'>
                            <span>$1890.99</span>
                            <span className='font-semibold text-gray-400 line-through sm:text-2xl text-xl font-serif'>$49.99</span>
                        </div>
                    </div>

                </div>




                <div className="flex flex-col flex-1 gap-2 pt-28 sm:max-w-[200px] md:max-w-[500px] min-w-[200px] w-full text-right">
                    <p className="font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, vel.
                    </p>
                    <span className="font-bold">
                        Martin Rodriguez
                    </span>
                </div>

        </div>
    )
}

