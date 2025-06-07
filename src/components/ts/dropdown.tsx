"use client"
import React, { FC, useState } from 'react'
import { US } from 'country-flag-icons/react/3x2'
import { IR } from 'country-flag-icons/react/3x2'
import Link from 'next/link';
import { GrLanguage } from "react-icons/gr";

export const Dropdown: FC = () => {
    const [dropdown, setDropdown] = useState<boolean>(false)
    const delay = () => {
        setTimeout(() => { setDropdown(false) }, 150);
    }

    return (
        <div className="fixed top-0 text-left flex p-5" >

            <button onClick={() => setDropdown(!dropdown)} onBlur={delay} id="dropdown-button" className="bg-transparent rounded-full p-3 border border-transparent hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition">
                <GrLanguage className='text-yellow-400' />
            </button>

            {dropdown && <div className="w-24 rounded-md shadow-lg shadow-black z-10">
                <div className="grid grid-cols-2">
                    <Link href='/en' className="rounded-md p-2 text-sm text-yellow-500 hover:bg-gray-700 active:bg-gray-700 cursor-pointer" role="menuitem">
                        <US title="United States" />
                    </Link>
                    <Link href='/fa' className="rounded-md p-2 text-sm text-yellow-500 hover:bg-gray-700 active:bg-gray-700 cursor-pointer" role="menuitem">
                        <IR title="Iran" />
                    </Link>
                </div>
            </div>}

        </div>
    )
}