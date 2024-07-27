"use client"
import Back_botton from "@/components/ts/back-botton";
import { FC } from "react";
import AroundLogo from "./around-logo";
import ApexLogo from "./apex-logo";
import { useTranslation } from "react-i18next";

const Content: FC = () => {
    const { t } = useTranslation()

    return (
        <div className="col-span-8 h-screen">

            <div className="py-10 text-center relative text-3xl">
                <Back_botton className="z-[9] top-8" />
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text">
                    {t("title")}
                </span>
            </div>

            <div className="w-full relative h-4/5 flex justify-center items-center">

                <AroundLogo />

                <div className="w-40 aspect-square mr-12">
                    <ApexLogo />
                </div>
            </div>
        </div>
    )
}
export default Content