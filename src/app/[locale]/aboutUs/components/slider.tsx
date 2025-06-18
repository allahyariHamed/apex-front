"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/components/css/slider.css';

const Slider = () => {
    return (
        <div className='relative h-12 bg-yellow-500 rounded shadow-lg shadow-black w-11/12'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='text-base text-black'>ویژگی های ما</div>
                    <div className='text-sm'>خانواده باارزش ترین دارایی است</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-base text-black'>خلاقیت</div>
                    <div className='text-sm'>خالق،خلاقیت فوق العاده ای به ما بخشیده است ، وظیفه مااستفاده از آن است!</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-base text-black'>خستگی ناپذیر</div>
                    <div className='text-sm'>نرسیدن شکست نیست، متوقف شدن یک شکست است.</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-base text-black'>کار گروهی</div>
                    <div className='text-sm'>با هم بودن آغاز است، با هم ماندن پیشرفت، و همکاری با هم موفقیت است.</div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
export default Slider