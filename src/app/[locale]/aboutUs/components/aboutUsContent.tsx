"use client"
import React from 'react'
import "@/app/[locale]/aboutUs/about_us.css"
import Image from 'next/image'
import Slider from './slider'
import Back_botton from '@/components/ts/backBotton'

const AboutUsContent = () => {

    return (
        <div className="about-us-body">
            <div className='relative h-full w-full flex flex-col text-center justify-center shadow-lg shadow-black mt-5 p-7 rounded'>
                <div className="about-us-h1">
                    <Back_botton className='' />
                    <h1 className='text-4xl text-yellow-400'>داستان اپکس</h1>
                </div>
                <div className="about-us-h2">
                    <span className='text-2xl text-yellow-400'>
                        !! سه دوست، اپکس را در سال 2014 تاسیس کرده و با بهترین ها همراه شده اند
                    </span>
                </div>
                <div className="about-us-h3 text-sm text-yellow-400">
                    <span>
                        شرکت ایده پردازان کلاه سفید البرز در سال 1393 در قالب یک گروه نرم افزاری با نام تجاری اپکس، متشکل از 3 نفر فعالیت خود را در زمینه طراحی و توسعه سامانه های نرم افزاری آغاز نمود. با توجه به محوریت اساسی تمرکز بر قدرت یادگیری افراد و غربال نیروی های مجموعه که غالبا دانش آموختگان مدارس سمپاد و یا دانشگاه های مطرح و برتر کشور هستند از نظر بهره هوشی، روحیه کار گروهی، مسئولیت پذیری، ایده پردازی و ... و در نظر داشتن پویایی و چابکی، اپکس توانسته است در طی سالیان فعالیت خود کارنامه درخشانی از خود بر جای گذارد و افتخار همکاری با مجموعه های بزرگ و نامداری را داشته و دارد. امروز خانواده اپکس بیش از 35 نفر عضو دارد که به صورت مستقیم و یا غیرمستقیم با اپکس همکاری دارند. خانواده ای بزرگ با اعضایی خلاق و با استعداد که هر یک در زمینه کاری خود متبحر و صاحب سبک هستند، اجتماعی از مدیران، برنامه نویسان، طراحان، محققین و... دفتر مرکزی اپکس در استان البرز و دیگر دفاتر آن به منظور گسترش فعالیت داخلی و خارجی در استان تهران و منطقه آزاد جزیره کیش واقع گردیده است
                    </span>
                </div>

                <div className='about-us-imgContainer'>

                    <div className='khosro-img'>
                        <div className='about-us-img flex justify-center items-center pr-1'>
                            <Image src="/circuit_board_4.svg" alt='sircuit_board' fill={true} className='svg' />
                            <Image src="https://dl2.apexteam.net/apexteamWeb/khosro.png" className='Image border-2 border-yellow-400' height={130} width={130} alt='ماسسین' />
                        </div>
                        <span className='text-yellow-400'>محمدرضا خسروآبادی</span>
                    </div>

                    <div className='mojtaba-img'>
                        <div className='about-us-img flex justify-center items-center pr-1'>
                            <Image src="/circuit_board_4.svg" alt='sircuit_board' fill={true} />
                            <Image src="https://dl2.apexteam.net/apexteamWeb/mojtaba.png" className='Image border-2 border-yellow-400' height={130} width={130} alt='ماسسین' />
                        </div>
                        <span className='text-yellow-400'>مجتبی اتفاقی</span>
                    </div>

                    <div className='mehdi-img'>
                        <div className='about-us-img flex justify-center items-center pr-1'>
                            <Image src="/circuit_board_4.svg" alt='sircuit_board' fill={true} />
                            <Image src="https://dl2.apexteam.net/apexteamWeb/mehdi.png" className='Image border-2 border-yellow-400' height={130} width={130} alt='ماسسین' />
                        </div>
                        <span className='text-yellow-400'>مهدی باقری</span>
                    </div>

                    <div className='khaled-img'>
                        <div className='about-us-img flex justify-center items-center pr-1  '>
                            <Image src="/circuit_board_4.svg" alt='sircuit_board' fill={true} className='svg' />
                            <Image src="https://dl2.apexteam.net/apexteamWeb/khaled.png" className='Image border-2 border-yellow-400' height={130} width={130} alt='ماسسین' />
                        </div>
                        <span className='text-yellow-400'>امیرحسین اخلاقی</span>
                    </div>
                </div>

                <div className='mt-5 flex justify-center items-center'>
                    <Slider />
                </div>
            </div>
        </div>
    )
}
export default AboutUsContent