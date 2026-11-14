import React, { useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import truckImage from '../../assets/images/scroll_truck.png';

export function ScrollProgressTruck() {
    const { scrollYProgress } = useScroll();
    const [direction, setDirection] = useState('right');

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const previous = scrollYProgress.getPrevious();
        if (latest > previous) {
            setDirection('right');
        } else if (latest < previous) {
            setDirection('left');
        }
    });

    // Smooth out the progress
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Map progress to percentage string for the truck position
    const truckPosition = useTransform(scaleX, value => `${value * 100}%`);

    return (
        <div className="fixed top-0 left-0 right-0 h-4 z-[100] pointer-events-none">
            {/* Track */}
            <div className="absolute inset-0 bg-transparent" />

            {/* Progress Bar */}
            <motion.div
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-orange-400 to-orange-600 origin-left h-1"
                style={{ scaleX, width: "100%" }}
            />

            {/* The Driving Truck */}
            <motion.div
                className="absolute top-0 -mt-2 -ml-8"
                style={{
                    left: truckPosition,
                    x: "0%" // Sits at the front of the bar
                }}
            >
                <div className="relative w-16 h-12">
                    <motion.img
                        src={truckImage}
                        alt="Driving Truck"
                        className="w-full h-full object-contain drop-shadow-md"
                        animate={{
                            scaleX: direction === 'right' ? -1 : 1
                        }}
                        transition={{ duration: 0.2 }}
                    />

                    {/* Wind lines animation - Adjusted position */}
                    <motion.div
                        className={`absolute top-1/2 w-4 h-2 flex flex-col gap-0.5 transition-all duration-300 ${direction === 'right' ? '-left-1' : '-right-1 items-end'}`}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            x: direction === 'right' ? [-2, -5, -8] : [2, 5, 8] // Reverse wind direction
                        }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    >
                        <div className="w-full h-[1px] bg-orange-400/60 rounded-full" />
                        <div className="w-2/3 h-[1px] bg-orange-400/60 rounded-full" />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
