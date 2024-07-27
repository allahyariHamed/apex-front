'use client'

import React, { MouseEventHandler, useEffect, useState } from 'react'
import Style from "@/components/css/Skills_circles.module.css";
import { GiBrain } from "react-icons/gi";
import { BsAndroid2 } from "react-icons/bs";
import { IoLogoChrome } from "react-icons/io5";
import { FaServer } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { TbPhotoFilled } from "react-icons/tb";
import { BsShieldLockFill } from "react-icons/bs";
import style from "@/app/[locale]/skills/skills.module.css";
import { useTranslation } from 'react-i18next';
import Back_botton from '@/components/ts/back-botton';

const Skills_circles = () => {

    const [heading, setHeading] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [descriptions, setDescription] = useState<string[]>([]);
    const { t } = useTranslation()

    const translation_key = [
        ["AI", "DA", "DL", "DNN", "DP", "ML", "MV", "NL", "XS"],
        ["desin", "responsive", "ecommerce", "webApp", "pannel", "clientPannel", "seo", "host", "job", "3D"],
        ["humanResources", "PWA", "debugging", "marketplace", "maintenance", "UnitTesting", "media", "instaANDtel", "Ebook", "game", "finance", "educational", "idea"],
        ["resource", "datacenter", "customSeys", "serverDev", "support", "dataStructure", "clustering", "loadBalance", "serverConfg", "hosting", "contentDelivery", "hacking", "humanResources"],
        ["humanResources", "PWA", "debugging", "marketplace", "maintenance", "UnitTesting", "media", "instaANDtel", "Ebook", "game", "IOSfinance", "educational", "idea"],
        ["Industrial", "packaging", "ADphoto", "3Ddesign", "animation", "motion", "illustrate", "character", "poster", "UI", "UX", "ADs", "identity", "logo", "Digital", "humanResources"],
        ["secTesting", "IPsec", "usability", "Tuning", "Auditing", "LAN", "integratedCollection", "SOC", "securityTeam", "attack", "VPN", "operationCenters", "Penetration", "optimize", "AssessingRisks", "ISMS", "securityProcesses", "strategy", "humanResources",]
    ]

    const icons = [
        { name: "هوش مصنوعی", icon: GiBrain, title: "1" },
        { name: "توسعه وب", icon: IoLogoChrome, title: "2" },
        { name: "توسعه اندروید", icon: BsAndroid2, title: "3" },
        { name: "توسعه سرور", icon: FaServer, title: "4" },
        { name: "توسعه ios", icon: FaApple, title: "5" },
        { name: "گرافیک", icon: TbPhotoFilled, title: "6" },
        { name: "امنیت", icon: BsShieldLockFill, title: "7" },
    ]

    const reset_style = (i: any) => {

        for (let index = 0; index < icons.length; index++) {
            const element = document.getElementById(index.toString())
            if (!index == i) {
                element?.setAttribute('style', element?.getAttribute('style') + ';box-shadow: 0px 0px 0px 0px !important');
            }
        }
    }

    const Description_handler = (index: number, name: string, title: string) => {
        for (let i = 0; i <= 7; i++) {
            const element = document.getElementById(i.toString())
            if (i == index) {
                element?.setAttribute('style', element?.getAttribute('style') + ';box-shadow: 0px 0px 10px 0px !important');
            } else {
                element?.setAttribute('style', element?.getAttribute('style') + ';box-shadow: 0px 0px 0px 0px !important');
            }
        }
        console.log(translation_key[index])
        setDescription(translation_key[index])
        setHeading(name)
        setTitle(title)
    }

    return (
        <div className={style.skills_container}>
            <div className='shadow-lg shadow-black mt-6 ml-16 rounded-lg '>
                <div className='relative grid justify-center'>
                    <Back_botton className=''/>

                    <div className='mt-4'>
                        <h1 className='text-3xl text-yellow-400'>{t(heading)}</h1>
                    </div>

                    {
                        title ?
                            <div className={style.title_div}>
                                <p>{title}</p>
                            </div>
                            : ""
                    }
                </div>

                <div className="mt-5">
                    <ol className={style.ol}>
                        {
                            descriptions.map((value, i) => {
                                return <li className={style.li} key={i}>{t(value.toString())}</li>
                            })
                        }
                    </ol>
                </div>
            </div>

            <div className={Style.container}>

                {icons.map((icon, i) => {
                    let Icon_component = icon.icon;
                    return (
                        <div key={i} className={Style.iconWrapper}>
                            <div id={i.toString()} className={Style.circle} onClick={() => {

                                Description_handler(i, icon.name, icon.title)
                                reset_style(i)
                            }}>
                                <Icon_component className='text-yellow-400' />
                            </div>
                            {/* <div className={Style.icon_title}>{icon.name}</div> */}
                        </div>
                    )
                })}
                <div className={Style.skills_line}></div>
            </div>
        </div>
    )
}

export default Skills_circles