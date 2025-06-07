'use client'
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const icons = [FaTwitter, BsInstagram, FaTelegramPlane, FaLinkedinIn]
    return (
        <>
            <svg width="0" height="0">
                <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#ca8a04" offset="0%" />
                    <stop stopColor="#fde047" offset="100%" />
                </linearGradient>
            </svg>

            <div className='flex justify-center gap-3'>
                {
                    icons.map((Icon, i) => (
                        <div key={i} className='border p-2 rounded-lg cursor-pointer border-transparent hover:border-yellow-400 transition-all'>
                            <Icon className='text-xl' style={{ fill: "url(#gradient)" }} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Footer