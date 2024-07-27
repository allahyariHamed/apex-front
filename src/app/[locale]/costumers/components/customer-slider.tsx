"use client"
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
SwiperCore.use([Autoplay, Pagination, Navigation]);
import 'swiper/swiper-bundle.css';
import img from "/public/lake-blue-moonlight.jpg"
import Image from 'next/image';

interface Props {
    direction: "horizontal" | "vertical"
    loop: boolean
    delay: number
    slidesPerView: number
    className?: string
    spaceBetween: number
    reverseDirection: boolean
}

const CustomerSlider: FC<Props> = ({ className, delay, slidesPerView, loop, direction, spaceBetween, reverseDirection }) => {

    return (
        <Swiper
            direction={direction}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            autoplay={{ delay: delay, reverseDirection: reverseDirection }}
            className={className}
            loop={loop}
        >
            {
                Array.from({ length: 14 }).map((_, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div className='border border-transparent hover:border-yellow-400 p-2 transition-all aspect-square cursor-pointer'>
                                <Image src={img} alt='#' className='w-full h-full' />
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}
export default CustomerSlider