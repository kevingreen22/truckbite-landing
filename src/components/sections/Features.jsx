import React from 'react';
import { motion } from 'framer-motion';
import { Map, Clock, Star, TrendingUp } from 'lucide-react';

import consumerMapImage from '../../assets/images/map_screenshot.png';
import vendorDashboardImage from '../../assets/images/dashboard_screenshot.png';

const features = [
    {
        title: "For Eaters",
        headline: "Find Your Craving, Faster",
        description: "Navigate the local food truck scene like a pro. Search by cuisine or truck name, set your radius, and get notified when your favorites go online.",
        image: consumerMapImage,
        items: [
            { icon: Map, text: "Radius-Based Map Search" },
            { icon: Star, text: "Favorite Trucks & Notifications" },
            { icon: Clock, text: "Live Status & Explore Tab" },
        ],
        align: "left",
        id: "for-eaters"
    },
    {
        title: "For Trucks",
        headline: "Drive Your Business",
        description: "Maximize your exposure with powerful vendor tools. Go online with one tap, track your analytics, and showcase your best dishes in your gallery.",
        image: vendorDashboardImage,
        items: [
            { icon: Map, text: "Easy 'Go Online' Status" },
            { icon: TrendingUp, text: "Performance Analytics" },
            { icon: Star, text: "Photo Gallery & Logo Upload" },
        ],
        align: "right",
        id: "for-trucks",
        bgClass: "bg-orange-50"
    }
];

export function Features() {
    return (
        <section id="features" className="bg-white overflow-hidden">
            {features.map((feature, index) => (
                <div
                    key={index}
                    id={feature.id}
                    className={`w-full py-24 ${feature.bgClass || ''}`}
                >
                    <div className="container mx-auto px-6">
                        <div className={`flex flex-col lg:flex-row items-center gap-16 ${feature.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Text Content */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={{
                                    hidden: { opacity: 0, x: feature.align === 'left' ? -50 : 50 },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.8,
                                            staggerChildren: 0.2
                                        }
                                    }
                                }}
                                className="flex-1 space-y-6"
                            >
                                <motion.div
                                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                    className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold tracking-wide uppercase"
                                >
                                    {feature.title}
                                </motion.div>
                                <motion.h2
                                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                    className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                                >
                                    {feature.headline}
                                </motion.h2>
                                <motion.p
                                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                    className="text-lg text-gray-600 leading-relaxed"
                                >
                                    {feature.description}
                                </motion.p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                    {feature.items.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="p-2 bg-orange-100/50 rounded-lg text-orange-600">
                                                <item.icon size={20} />
                                            </div>
                                            <span className="font-medium text-gray-700">{item.text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Image Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="flex-1 relative flex justify-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full blur-[100px] opacity-20 -z-10 transform scale-75" />

                                {/* Floating Animation */}
                                <motion.div
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [0, 2, 0]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <img
                                        src={feature.image}
                                        alt={feature.headline}
                                        className="w-[300px] h-auto mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                    />
                                </motion.div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
