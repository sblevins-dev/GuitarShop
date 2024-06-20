import guitar from "@public/assets/images/guitar2.png"
import Image from "next/image"

export default function Hero() {
    return (
        <div className=' max-h-[100vh] relative h-screen  overflow-hidden justify-center xl:px-96'>
            {/* <div className="absolute w-full h-full l">
               <Image
                        src={guitar}
                        alt="guitar"
                        objectFit="cover"
                        className="w-auto h-full max-h-[100vh]"
                    /> 
            </div> */}
                    
            <div
                className="flex justify-center lg:gap-60 xl:gap-[400px] pt-20 px-8"
            >

                <div className='flex flex-col gap-10'>
                    
                    <h1 className='font-extrabold text-9xl text-right font-serif'>Telecaster Guitar</h1>
                    
                    <div className="flex flex-row justify-center items-center">
                        <p className='flex-1 font-semibold text-right md:text-[.8rem] pl-10'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ratione!
                        </p>
                        <div className='flex-1 flex flex-col text-right text-5xl font-semibold font-serif'>
                            <span>$1890.99</span>
                            <span className='font-semibold text-gray-400 line-through text-2xl font-serif'>$49.99</span>
                        </div>
                    </div>

                </div>

                


                <div className="flex flex-col gap-2 pt-28">
                    <p className="font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, vel.
                    </p>
                    <span className="font-bold">
                        Martin Rodriguez
                    </span>
                </div>
            </div>

        </div>
    )
}

