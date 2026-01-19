'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    duration?: number;
    fullWidth?: boolean;
}

export function FadeIn({
    children,
    className = '',
    delay = 0,
    direction = 'up',
    duration = 0.5,
    fullWidth = false,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const getVariants = (): Variants => {
        const distance = 40;
        const initial: any = { opacity: 0 };

        if (direction === 'up') initial.y = distance;
        else if (direction === 'down') initial.y = -distance;
        else if (direction === 'left') initial.x = distance;
        else if (direction === 'right') initial.x = -distance;

        return {
            hidden: initial,
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                    duration: duration,
                    delay: delay,
                    ease: [0.25, 0.46, 0.45, 0.94], // Ease out cubic
                },
            },
        };
    };

    return (
        <div ref={ref} className={`${fullWidth ? 'w-full' : ''}`}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    );
}
