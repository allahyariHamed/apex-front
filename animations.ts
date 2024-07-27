import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// export const animatePageIn = () => {
//     const transitionElement = document.getElementById("transition-element");

//     if (transitionElement) {
//         const tl = gsap.timeline();

//         tl.set(transitionElement, {
//             xPercent: 0,
//             width: "100vw",
//             height: "100vh",
//         })
//             .to(transitionElement, {
//                 // xPercent: -100,
//                 duration: 1,
//                 width: 0,
//                 height: 0,
//             })
//             .to(
//                 transitionElement,
//                 {
//                     borderTopRightRadius: "50vh",
//                     borderTopLeftRadius: "50vh",
//                     borderBottomRightRadius: "50vh",
//                     borderBottomLeftRadius: "50vh",
//                     duration: 0.4,
//                 },
//                 "<"
//             );
//     }
// };

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
                    duration: 1,
                },
                "<"
            );
    }
};