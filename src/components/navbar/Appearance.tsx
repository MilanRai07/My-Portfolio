"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { toggleTheme } from "@/store/slices/themeSlice";

const Appearance: React.FC = () => {
    const mode = useSelector((state: RootState) => state.theme.mode)
    const dispatch = useDispatch();

    console.log(mode)

    return (
        <motion.div
            onClick={() => dispatch(toggleTheme())}
            className="cursor-pointer flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
        >
            <AnimatePresence mode="wait" initial={false}>
                {mode !== "light" ? (
                    <motion.div
                        key="sun"
                        initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                        <Sun className="w-7 h-7 max-md:w-5 max-md:h-5 text-yellow-500" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ rotate: 90, scale: 0.6, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: -90, scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                        <Moon className="w-7 h-7 max-md:w-5 max-md:h-5 text-indigo-400" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Appearance;
