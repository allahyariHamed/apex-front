"use client"
import React, { FC, useState } from 'react'
import "@/app/[locale]/ourProjects/projects.css"
import ProjectSvg from './projects-svg'
import Back_botton from '@/components/ts/back-botton'
import { useTranslation } from 'react-i18next'

const Projects_header: FC = () => {
    const { t } = useTranslation()
    const [active, setActive] = useState<number>(5)
    const fakeObject = [
        { text: "mobile-apps" },
        { text: "web-apps" },
        { text: "desktop-apps" }
    ]

    return (
        <div>
            <div className='relative text-center py-5 text-yellow-400 text-2xl'>
                <Back_botton className='top-5 left-5' />
                <div id='header-title'>{t("last-projects")}</div>
                <div>{t("moment")}</div>
            </div>

            <div className='grid grid-cols-3 gap-3 max-w-3xl mt-10 mx-auto'>
                {
                    fakeObject.map((data, i) => {
                        return (
                            <div key={i} onClick={() => setActive(i)} className='relative aspect-square flex justify-center items-center rounded-full cursor-pointer'>
                                <ProjectSvg isActive={active == i} />
                                <div className='absolute text-yellow-400 aspect-square flex items-center justify-center text-center text-xs w-1/3'>{t(data.text)}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
export default Projects_header