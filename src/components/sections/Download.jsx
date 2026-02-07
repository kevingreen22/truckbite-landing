import React from 'react';
import { motion } from 'framer-motion';
import { Apple } from 'lucide-react';
import { Button } from '../ui/Button';

export function Download() {
    return (
        <section id="download" className="py-24 bg-orange-600 text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-10 flex justify-center items-center">
                <div className="w-[800px] h-[800px] border-[60px] border-white rounded-full animate-ping duration-[3000ms]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-12">
                        Get the App
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Consumer Card */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-4">Hungry?</h3>
                            <p className="text-orange-100/90 mb-8 h-12">
                                Find food trucks, see menus, and track live locations.
                            </p>
                            <div className="flex flex-col items-center gap-4">
                                <a href="https://apps.apple.com/us/app/truckbite-consumer-placeholder" className="inline-block transform hover:scale-105 transition-transform duration-300">
                                    <img
                                        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1276560000"
                                        alt="Download TruckBite on the App Store"
                                        className="h-14 w-auto"
                                    />
                                </a>
                                <span className="text-sm font-semibold tracking-wide">Download TruckBite</span>
                            </div>
                        </div>

                        {/* Vendor Card */}
                        <div className="bg-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-gray-900/40 transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-4">Food Truck Owner?</h3>
                            <p className="text-orange-100/90 mb-8 h-12">
                                Manage your fleet, update location, and track analytics.
                            </p>
                            <div className="flex flex-col items-center gap-4">
                                <a href="https://apps.apple.com/us/app/truckbite-vendor-placeholder" className="inline-block transform hover:scale-105 transition-transform duration-300">
                                    <img
                                        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1276560000"
                                        alt="Download Vendor App on the App Store"
                                        className="h-14 w-auto"
                                    />
                                </a>
                                <span className="text-sm font-semibold tracking-wide">Download TruckBite - Vendor</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-orange-100/60 text-sm mt-12">
                        Coming soon to Google Play
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
