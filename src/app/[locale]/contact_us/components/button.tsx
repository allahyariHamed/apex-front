"use client"
import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
    text: string
    className?: string
    setButtonState: React.Dispatch<React.SetStateAction<number>>
    value: number
}

const Button: FC<Props> = ({ text, className, setButtonState, value }) => {
    const { t } = useTranslation()
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5, duration: 1 }}>
            <div className='relative overflow-hidden p-[1px] z-0 flex 
            justify-center items-center before rounded-full'
                onClick={() => setButtonState(value)}>
                <div className={className}>{t(text)}</div>
            </div>
        </motion.div>
    )
}

export default Button