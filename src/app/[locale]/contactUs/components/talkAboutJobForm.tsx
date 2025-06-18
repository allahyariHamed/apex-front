import clsx from 'clsx'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';

const TalkAboutJobForm = () => {
    const [active, setActive] = useState<boolean>(false)
    const { t } = useTranslation()

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div>
                <form action="#">

                    <div className='relative my-4'>
                        <input type="text" name="Fullname" id="Fullname" className="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-500 appearance-none dark:text-yellow-300 dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                        <label htmlFor="Fullname" className="peer-focus:font-medium absolute text-sm text-yellow-500 dark:text-yellow-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("fullName")}</label>
                    </div>

                    <div className='relative my-4'>
                        <input type="tel" name="Phone-number" id="Phone-number" className="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-500 appearance-none dark:text-yellow-300 dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                        <label htmlFor="Phone-number" className="peer-focus:font-medium absolute text-sm text-yellow-500 dark:text-yellow-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("phoneNumber")}</label>
                    </div>

                    <div className='relative my-4'>
                        <input type="email" name="Email" id="Email" className="block py-2.5 px-0 w-full text-sm text-yellow-900 bg-transparent border-0 border-b-2 border-yellow-500 appearance-none dark:text-yellow-300 dark:border-yellow-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                        <label htmlFor="Email" className="peer-focus:font-medium absolute text-sm text-yellow-500 dark:text-yellow-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("email")}</label>
                    </div>

                    <button onFocus={() => setActive(true)} onBlur={() => setActive(false)} id="dropdownButton" data-dropdown-toggle="dropdown" className="text-yellow-400 border border-yellow-500 hover:bg-yellow-500 hover:text-black focus:ring-2 focus:outline-none focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center flex items-center justify-between" type="button">{t("publicMassage")}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    <div id="dropdown" className={clsx("z-10 bg-transparent border border-yellow-500 divide-y divide-yellow-100 mt-4 rounded-lg w-full", !active ? "hidden" : '')}>

                        <ul className="py-2 text-sm text-yellow-500" aria-labelledby="dropdownButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-yellow-500 hover:text-black">{t("publicMassage")}</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-yellow-500 hover:text-black">{t("publicMassage")}</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-yellow-500 hover:text-black">{t("publicMassage")}</a>
                            </li>
                        </ul>

                    </div>

                    <button type="submit" className='text-black bg-gradient-to-tr from-yellow-700 via-yellow-500 to-yellow-700 focus:ring-2 focus:outline-none focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 w-full text-center flex items-center justify-center'>{t("submit")}</button>
                </form >
            </div >
        </motion.div>
    )
}

export default TalkAboutJobForm