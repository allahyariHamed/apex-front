"use client"
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next';
import { LogoSvg } from './fa-logo';
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const Logo: FC = () => {
    const { t } = useTranslation()

    return (
        <div>
            <LogoSvg />
            <div className="text-center">
                <h2 className='text-xl bg-gradient-to-r from-yellow-700 to-yellow-200 text-transparent bg-clip-text pb-2'>{t("apex_team")}</h2>
                <div className="text-xs bg-gradient-to-r from-yellow-500 to-yellow-300 text-transparent bg-clip-text py-3">{t("title_under_logo")}</div>
            </div>

            <div className='grid grid-cols-4 gap-2'>
                <div className='border p-2 rounded-lg cursor-pointer border-transparent hover:border-yellow-400 transition-all'>
                    <FaTwitter className='mx-auto text-2xl text-yellow-400' />
                </div>
                <div className='border p-2 rounded-lg cursor-pointer border-transparent hover:border-yellow-400 transition-all'>
                    <BsInstagram className='mx-auto text-2xl text-yellow-400' />
                </div>
                <div className='border p-2 rounded-lg cursor-pointer border-transparent hover:border-yellow-400 transition-all'>
                    <FaTelegramPlane className='mx-auto text-2xl text-yellow-400' />
                </div>
                <div className='border p-2 rounded-lg cursor-pointer border-transparent hover:border-yellow-400 transition-all'>
                    <FaLinkedinIn className='mx-auto text-2xl text-yellow-400' />
                </div>
            </div>
        </div>
    )
}