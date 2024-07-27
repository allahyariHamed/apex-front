"use client"
import React, { FC, useState } from 'react'
import { US } from 'country-flag-icons/react/3x2'
import { IR } from 'country-flag-icons/react/3x2'
import Link from 'next/link';
import { GrLanguage } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

export const Dropdown: FC = () => {
    const [dropdown, setDropdown] = useState<boolean>(false)
    const delay = () => {
        setTimeout(() => {
            setDropdown(false)
        }, 150);
    }

    return (
        <div className="relative text-left p-5" >

            <button onClick={() => setDropdown(!dropdown)} onBlur={() => {delay()}} id="dropdown-button" className="flex gap-2 px-4 py-2 text-sm bg-222 border border-transparent hover:border-yellow-400 rounded-full focus:ring-1 focus:ring-yellow-400 transition-all">
                <GrLanguage className='text-yellow-400' />
                {
                    dropdown ? <FaChevronDown className='text-yellow-400' /> : <FaChevronUp className='text-yellow-400 rotate-90' />
                }
            </button>

            {
                dropdown ?
                    <div className="absolute left-5 top-16 w-28 rounded-md shadow-lg shadow-black z-10">
                        <div className="grid grid-cols-2">
                            <Link href='/en' className="flex rounded-md p-2 text-sm text-yellow-500 hover:bg-gray-700 active:bg-gray-700 cursor-pointer" role="menuitem">
                                <US title="United States" />
                            </Link>
                            <Link href='/fa' className="flex rounded-md p-2 text-sm text-yellow-500 hover:bg-gray-700 active:bg-gray-700 cursor-pointer" role="menuitem">
                                <IR title="Iran" />
                            </Link>
                        </div>
                    </div>
                    : null
            }

        </div>
    )
}