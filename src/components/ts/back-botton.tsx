"use client"
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react'
import { animatePageOut } from '../../../animations';
import { IoArrowBackCircle } from 'react-icons/io5';
import clsx from 'clsx';

interface Props {
    className?: string ;
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
            <a onClick={handleClick}>
                <IoArrowBackCircle className={clsx('absolute w-11 h-11 top-1 left-7 shadow shadow-black rounded-3xl active:shadow-none hover:cursor-pointer text-yellow-400', className)} />
            </a>
        </div>
    )
}
export default Back_botton