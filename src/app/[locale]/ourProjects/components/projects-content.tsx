import Image from "next/image";
import { FC } from "react";
import img from "/public/lake-blue-moonlight.jpg"

const Projects_content: FC = () => {
    return (
        <div className="grid grid-cols-4 gap-1 max-w-7xl mx-auto mt-10">
            {
                Array.from({ length: 10 }).map((_, i) => {
                    return (
                        <div key={i} className="border border-transparent hover:border-yellow-400 hover:shadow-md hover:shadow-black  rounded-lg p-1 transition-all hover:-translate-y-[2px]">
                            <Image src={img} alt="#" className="w-full h-full"/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Projects_content