import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { WaitlistForm } from '../ui/WaitlistForm';

export function VendorHero() {
    return (
        <section id="waitlist" className="relative overflow-hidden bg-orange-50 pt-40 pb-24">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-100/50 rounded-bl-[100px] -z-10" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-semibold text-orange-600 border border-orange-100">
                        <MapPin size={16} />
                        For food truck owners
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]">
                        Get your truck{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500">
                            found.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                        TruckBite puts your truck on a live map so hungry customers always know where you're
                        parked. Free to start, with an optional premium plan for more features.
                    </p>

                    <p className="text-gray-500">Launching soon. Join the waitlist to be notified the day we go live.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-md w-full lg:ml-auto"
                >
                    <WaitlistForm id="hero" />
                </motion.div>
            </div>
        </section>
    );
}
