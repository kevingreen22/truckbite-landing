import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowRight, Star } from 'lucide-react';
import { Button } from '../ui/Button';
import heroImage from '../../assets/images/hero_food_truck_illustration_1770404215667.png';

export function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 800], [0, 400]); // Increased range/speed
    const y2 = useTransform(scrollY, [0, 800], [0, -300]); // Increased range/speed
    const rotate = useTransform(scrollY, [0, 800], [0, 45]);

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-orange-50 pt-48 lg:pt-40">
            {/* Background Decorative Elements */}
            <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-1/2 h-full bg-orange-100/50 rounded-bl-[100px] -z-10" />
            <motion.div style={{ y: y2, rotate }} className="absolute bottom-20 left-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" />
            <motion.div style={{ y: y1 }} className="absolute top-20 right-10 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
                        Find Your Next <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500">
                            TruckBite
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                        Track your favorite food trucks in real-time. See live locations, menus, and shorter wait times.
                    </p>

                    <div className="flex flex-col gap-6 pt-4 items-start">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-semibold text-orange-600 border border-orange-100">
                            <Star size={16} className="fill-orange-600" />
                            #1 Food Truck Discovery App
                        </div>

                        <Button className="flex items-center justify-center gap-2 group w-full sm:w-auto min-w-[200px] text-lg px-8 py-4"
                            onClick={() => document.getElementById('download').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Find Trucks
                            <MapPin size={20} className="group-hover:animate-bounce" />
                        </Button>
                    </div>

                    <div className="flex items-center gap-4 pt-8 pb-12 text-sm text-gray-500">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden`}>
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <p className="font-medium">Joined by 10,000+ foodies</p>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                        <img
                            src={heroImage}
                            alt="Food Truck Scene"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Floating UI Cards */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 max-w-xs z-20"
                    >
                        <div className="bg-green-100 p-3 rounded-full text-green-600">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900">Live Tracking</p>
                            <p className="text-sm text-gray-500">Real-time GPS updates</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
