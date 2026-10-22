import React from 'react';
import { motion } from 'framer-motion';
import { WaitlistForm } from '../ui/WaitlistForm';

export function WaitlistCTA() {
    return (
        <section id="join" className="py-24 bg-orange-600 text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold">Be one of our first trucks.</h2>
                    <p className="text-orange-100/90 text-lg max-w-md">
                        Join the waitlist and we'll email you the day TruckBite launches.
                    </p>
                </motion.div>

                <div className="max-w-md w-full lg:ml-auto text-left">
                    <WaitlistForm id="footer" />
                </div>
            </div>
        </section>
    );
}
