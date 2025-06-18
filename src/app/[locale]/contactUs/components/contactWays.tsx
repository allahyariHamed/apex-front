import React, { FC } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn, FaPhone, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import { motion } from 'framer-motion';

const ContactWays = () => {
    const { t } = useTranslation()

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className='grid justify-center mt-5'>
                <svg width="0" height="0">
                    <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#ca8a04" offset="0%" />
                        <stop stopColor="#fde047" offset="100%" />
                    </linearGradient>
                </svg>

                <div className='flex p-2 items-center'>
                    <FaLocationDot className='mr-3' style={{ fill: "url(#gradient)" }} />
                    <div className='bg-gradient-to-l from-yellow-600 via-yellow-300 to-yellow-600 text-transparent bg-clip-text'>
                        {t("location")}
                    </div>
                </div>
                <div className='flex p-2 items-center'>
                    <FaClock className='mr-3' style={{ fill: "url(#gradient)" }} />
                    <div className='bg-gradient-to-l from-yellow-600 via-yellow-300 to-yellow-600 text-transparent bg-clip-text'>
                        {t("clock")}
                    </div>
                </div>
                <div className='flex p-2 items-center'>
                    <FaPhone className='mr-3' style={{ fill: "url(#gradient)" }} />
                    <div className='bg-gradient-to-l from-yellow-600 via-yellow-300 to-yellow-600 text-transparent bg-clip-text border-b border-transparent hover:border-yellow-500 '>
                        <Link href={"#"}>{t("call")}</Link>
                    </div>
                </div>


                <div className='grid grid-cols-4 gap-2 mt-5'>
                    <div className='border p-2 rounded-lg cursor-pointer border-transparent hover:border-yellow-400 transition-all'>
                        <FaTwitter className='mx-auto text-xl' style={{ fill: "url(#gradient)" }} />
                    </div>
                    <div className='border p-2 rounded-lg cursor-pointer border-transparent hover:border-yellow-400 transition-all'>
                        <BsInstagram className='mx-auto text-xl' style={{ fill: "url(#gradient)" }} />
                    </div>
                    <div className='border p-2 rounded-lg cursor-pointer border-transparent hover:border-yellow-400 transition-all'>
                        <FaTelegramPlane className='mx-auto text-xl' style={{ fill: "url(#gradient)" }} />
                    </div>
                    <div className='border p-2 rounded-lg cursor-pointer border-transparent hover:border-yellow-400 transition-all'>
                        <FaLinkedinIn className='mx-auto text-xl' style={{ fill: "url(#gradient)" }} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactWays