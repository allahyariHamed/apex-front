"use client";
import Circle from "@/components/ts/Circle";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Circle className="z-10 bg-black w-0 h-0 fixed top-0 border border-yellow-400" />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, ease: "easeInOut" }}>
                {children}
            </motion.div>
        </div>
    );
}