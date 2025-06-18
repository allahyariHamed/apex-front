import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageOut = (href: string, router: AppRouterInstance, x: number, y: number) => {
    const animationWrapper = document.getElementById("transition-element");

    if (animationWrapper) {
        const tl = gsap.timeline();

        tl.set(animationWrapper, {
            x: x,
            y: y,
            width: "0vw",
            height: "0vh",
            borderRadius: "50%"
        })
            .to(animationWrapper, {
                x: 0,
                y: 0,
                duration: 1,
                width: "100vw",
                height: "100vh",
                onComplete: () => {
                    router.push(href);
                },
            })
            .to(
                animationWrapper,
                {
                    borderRadius: "0%",
                    duration: 2,
                },
                "<"
            );
    }
};