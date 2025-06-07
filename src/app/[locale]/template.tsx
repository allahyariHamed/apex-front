"use client";
import { Circle } from '@/components/ts/svgExport';
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {

    return (
        <div>
            <Circle className="z-10 bg-222 w-0 h-0 fixed shadow-md shadow-yellow-400" id="transition-element" />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }}>
                {children}
            </motion.div>
        </div>
    );
}