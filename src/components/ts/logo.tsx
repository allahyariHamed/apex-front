"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';
import { LogoSvg } from './fa-logo';

export const Logo = () => {
    const { t } = useTranslation()

    return (
        <div className='relative flex items-center'>
            <svg width="0" height="0">
                <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#ca8a04" offset="0%" />
                    <stop stopColor="#fde047" offset="100%" />
                </linearGradient>
            </svg>

            <LogoSvg className='logo-path' />

            <div className='absolute bottom-0'>
                <div className="text-center">
                    <h2 className='text-sm bg-gradient-to-r from-yellow-700 to-yellow-200 text-transparent bg-clip-text'>{t("apex_team")}</h2>
                    <div className="text-[9px] bg-gradient-to-r from-yellow-500 to-yellow-300 text-transparent bg-clip-text py-3">{t("title_under_logo")}</div>
                </div>
            </div>
        </div>
    )
}