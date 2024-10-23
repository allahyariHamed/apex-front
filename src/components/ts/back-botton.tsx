"use client"
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react'
import { animatePageOut } from '../../../animations';
import { IoArrowBackCircle } from 'react-icons/io5';
import clsx from 'clsx';

interface Props {
    className?: string;
}

const Back_botton: FC<Props> = ({ className }) => {

    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
    const mouse_position = (event: MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY })
    }
    const router = useRouter();

    const handleClick = () => {
        animatePageOut("/", router, position.x, position.y);
    };

    useEffect(() => {
        window.addEventListener('mousemove', mouse_position);
        return () => {
            window.removeEventListener('mousemove', mouse_position);
        };
    }, [])

    return (

        <div>
            <svg width="0" height="0">
                <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#ca8a04" offset="0%" />
                    <stop stopColor="#fde047" offset="100%" />
                </linearGradient>
            </svg>
            <a onClick={handleClick}>
                <IoArrowBackCircle className={clsx('absolute w-11 h-11 top-1 left-7 rounded-3xl hover:cursor-pointer', className)} style={{ fill: "url(#gradient)" }}/>
            </a>
        </div>
    )
}
export default Back_botton