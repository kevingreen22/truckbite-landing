import React from 'react';
import { motion } from 'framer-motion';
import { Map, Clock, Star, TrendingUp } from 'lucide-react';

import consumerMapImage from '../../assets/images/map_screenshot.png';
import vendorDriverImage from '../../assets/images/vendor_driver_framed.png';
import vendorDashboardImage from '../../assets/images/vendor_dashboard_framed.png';
import vendorMetricsImage from '../../assets/images/vendor_metrics_framed.png';

const themes = {
    orange: {
        badge: 'bg-orange-100 text-orange-600',
        icon: 'bg-orange-100/50 text-orange-600',
        glow: 'from-orange-400 to-yellow-300',
    },
    teal: {
        badge: 'bg-vendor-100 text-vendor-700',
        icon: 'bg-vendor-100/60 text-vendor-600',
        glow: 'from-vendor-400 to-vendor-accent',
    },
};

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
        id: "for-eaters",
        theme: "orange"
    },
    {
        title: "For Trucks",
        headline: "Drive Your Business",
        description: "Maximize your exposure with powerful vendor tools. Go online with a honk, track your analytics, and showcase your best dishes in your gallery.",
        items: [
            { icon: Map, text: "Honk to Go Online" },
            { icon: TrendingUp, text: "Performance Analytics" },
            { icon: Star, text: "Photo Gallery & Logo Upload" },
        ],
        id: "for-trucks",
        theme: "teal",
        bgClass: "bg-vendor-50",
        gallery: [
            {
                image: vendorDriverImage,
                title: "Go live with a honk",
                text: "Honk your horn to go online or offline. Swipe up for your dashboard.",
            },
            {
                image: vendorDashboardImage,
                title: "Everything at a glance",
                text: "Your last posted location, live status, profile and photo gallery in one place.",
            },
            {
                image: vendorMetricsImage,
                title: "Know your numbers",
                text: "Key metrics and engagement for today, this week or this month.",
            },
        ],
    }
];

export function Features({ ids }) {
    const visible = ids ? features.filter((f) => ids.includes(f.id)) : features;
    return (
        <section id="features" className="bg-white overflow-hidden">
            {visible.map((feature, index) => {
                const t = themes[feature.theme || 'orange'];
                if (feature.gallery) {
                    return <GallerySection key={index} feature={feature} t={t} />;
                }
                return (
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
                                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase ${t.badge}`}
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
                                            <div className={`p-2 rounded-lg ${t.icon}`}>
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
                                <div className={`absolute inset-0 bg-gradient-to-br ${t.glow} rounded-full blur-[100px] opacity-20 -z-10 transform scale-75`} />

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
                );
            })}
        </section>
    );
}

// Header text plus a row of framed phone screenshots with captions
function GallerySection({ feature, t }) {
    return (
        <div id={feature.id} className={`w-full py-24 ${feature.bgClass || ''}`}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto text-center space-y-6"
                >
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase ${t.badge}`}>
                        {feature.title}
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">{feature.headline}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-2">
                        {feature.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${t.icon}`}>
                                    <item.icon size={20} />
                                </div>
                                <span className="font-medium text-gray-700">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <div className="relative mt-20">
                    <div className={`absolute inset-x-0 top-1/4 h-1/2 bg-gradient-to-r ${t.glow} blur-[120px] opacity-20 -z-10`} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 items-start">
                        {feature.gallery.map((shot, i) => (
                            <motion.figure
                                key={shot.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                                className="flex flex-col items-center text-center"
                            >
                                <motion.img
                                    src={shot.image}
                                    alt={shot.title}
                                    loading="lazy"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                                    className="w-[250px] max-w-full h-auto drop-shadow-2xl"
                                />
                                <figcaption className="mt-8 max-w-[260px] space-y-2">
                                    <h3 className="text-xl font-bold text-gray-900">{shot.title}</h3>
                                    <p className="text-gray-600">{shot.text}</p>
                                </figcaption>
                            </motion.figure>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
