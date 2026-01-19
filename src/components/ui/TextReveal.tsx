"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import React from 'react';

interface TextRevealProps {
    text: string;
    el?: keyof React.JSX.IntrinsicElements;
    className?: string;
    delay?: number;
}

export const TextReveal = ({ text, el: Wrapper = "p", className, delay = 0 }: TextRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <Wrapper className={className}>
            <motion.span
                ref={ref}
                style={{ display: "inline-block" }} // Important for layout
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {text.split("").map((char, index) => (
                    <motion.span variants={child} key={index}>
                        {char === "\n" ? <br /> : char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.span>
        </Wrapper>
    );
};
