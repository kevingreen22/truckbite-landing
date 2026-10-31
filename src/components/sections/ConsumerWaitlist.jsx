import React from 'react';
import { motion } from 'framer-motion';
import { WaitlistForm } from '../ui/WaitlistForm';

export function ConsumerWaitlist() {
    return (
        <section id="waitlist" className="py-24 bg-orange-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 flex justify-center items-center">
                <div className="w-[800px] h-[800px] border-[60px] border-white rounded-full animate-ping duration-[3000ms]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold">Be first to find the trucks.</h2>
                    <p className="text-orange-100/90 text-lg max-w-md">
                        TruckBite is launching soon. Join the waitlist and we'll email you the day it's available.
                    </p>
                </motion.div>

                <div className="max-w-md w-full lg:ml-auto text-left">
                    <WaitlistForm id="consumer" audience="consumer" />
                </div>
            </div>
        </section>
    );
}
