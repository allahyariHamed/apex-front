"use client";
import { useRouter } from "next/navigation";
import { animatePageOut } from "../../../animations";
import { useEffect, useState } from "react";

export default function TransitionLink({ href, pointer }: { href: string, pointer: string }) {

    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
    const mouse_position = (event: MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY })
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouse_position);
        return () => {
            window.removeEventListener('mousemove', mouse_position);
        };
    }, [])

    const router = useRouter();
    const handleClick = () => {
        animatePageOut(href, router, position.x, position.y);
    };

    return (
        <div onClick={handleClick} style={{ width: pointer }} className='h-full rounded-full cursor-pointer'></div>
    );
}