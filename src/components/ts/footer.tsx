'use client'
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation()
    const icons = [FaTwitter, BsInstagram, FaTelegramPlane, FaLinkedinIn]
    const motionIcons = []
    for (let i = 0; i < icons.length; i++) {
        motionIcons.push(motion(icons[i]))
    }
    return (
        <>
            <svg width="0" height="0">
                <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#ca8a04" offset="0" />
                    <stop stopColor="#FFEA75" offset="0.5" />
                    <stop stopColor="#ca8a04" offset="1" />
                </linearGradient>
            </svg>
            <div className="flex justify-center w-full -mt-5 lg:-mt-10">
                <div className="inline-block text-[11px] lg:text-base bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 text-transparent bg-clip-text">{t("title-under-logo")}</div>
            </div>
            <div className='flex justify-center gap-5 mt-2 absolute bottom-0 p-4 w-full'>
                {
                    motionIcons.map((MotionIcon, i) => (
                        <motion.div whileHover={{ scale: 1.5 }} key={i} className='rounded-lg cursor-pointer'>
                            <MotionIcon className='text-xl' fill="url(#gradient)" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: 'spring', bounce: 0.5, delay: i + 2 }} />
                        </motion.div>
                    ))
                }
            </div>
        </>
    )
}

export default Footer