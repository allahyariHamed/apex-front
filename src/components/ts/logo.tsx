"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';
import { LogoSvg } from './logo-svg';
import { motion } from "framer-motion";

export const Logo = () => {
    const { t } = useTranslation()

    return (
        <div className='flex flex-col justify-center'>
            <LogoSvg />

            <motion.div className="flex justify-center p-2" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 6, ease: 'easeInOut' }}>
                <div className='text-xl lg:text-3xl inline-block bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 text-transparent bg-clip-text'>{t("apex-team")}</div>
            </motion.div>
        </div>
    )
}