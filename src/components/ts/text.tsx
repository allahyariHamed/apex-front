"use client"
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface prop {
    text: string
    className: string
    transform: string
    x: string
    y: string
}
const Text = ({ text, className, transform, x, y }: prop) => {
    const { t } = useTranslation()
    return (
        <>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0" stopColor="#eab308" />
                <stop offset="0.5" stopColor="#FFEA75" />
                <stop offset="1" stopColor="#eab308" />
            </linearGradient>

            <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 6, ease: "easeInOut" }} className={className} transform={transform} fill='url(#textGradient)' x={x} y={y}>{t(text)}</motion.text>
        </>
    )
}

export default Text