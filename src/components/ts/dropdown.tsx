"use client"
import React, { useState } from 'react'
import { US } from 'country-flag-icons/react/3x2'
import { IR } from 'country-flag-icons/react/3x2'
import Link from 'next/link';
import { GrLanguage } from "react-icons/gr";
import clsx from 'clsx';
import { AnimatePresence, motion } from "framer-motion"

const Dropdown = () => {
    const [dropdown, setDropdown] = useState<boolean>(false)
    const delay = () => {
        setTimeout(() => { setDropdown(false) }, 150);
    }

    return (
        <div className="flex justify-center absolute top-4 w-full">
            <motion.button whileHover={{ scale: 1.5 }} onClick={() => setDropdown(!dropdown)} onBlur={delay} id="dropdown-button" className={clsx("relative bg-transparent rounded-full mt-3 p-1",
                // dropdown && 'focus:ring-1 focus:ring-yellow-400'
            )}>
                <GrLanguage fill='currentColor' stroke='url(#gradient)'/>
            </motion.button>

            <AnimatePresence>
                {
                    dropdown &&
                    <div className="absolute rounded-md z-10 flex gap-3 top-12">
                        <motion.div whileHover={{ scale: 1.4 }} className='w-10 p-1' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
                            <Link href='/en' className="rounded-md w-full text-sm active:border-yellow-500 cursor-pointer" role="menuitem">
                                <US title="United States" />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.4 }} className='w-10 p-1' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
                            <Link href='/fa' className="rounded-md w-full text-sm active:border-yellow-500 cursor-pointer" role="menuitem">
                                <IR title="Iran" />
                            </Link>
                        </motion.div>
                    </div>
                }
            </AnimatePresence>
        </div >
    )
}
export default Dropdown