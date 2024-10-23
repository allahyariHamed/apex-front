"use client"
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
        <div className='relative overflow-hidden p-[1px] flex 
            justify-center items-center before rounded-full'
            onClick={() => setButtonState(value)}>
            <div className={className}>{t(text)}</div>
        </div>
    )
}

export default Button