import React, { useState, useEffect } from 'react';
import { Truck } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '../ui/Button';
import logoImage from '../../assets/images/app_icon.png';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 group">
                    {/* Logo Placeholder - will be replaced with real logo */}
                    <img src={logoImage} alt="TruckBite Logo" className="h-10 w-auto group-hover:scale-105 transition-transform" />
                    <span className="text-2xl font-bold tracking-tight text-gray-900">
                        Truck<span className="text-orange-600">Bite</span>
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {['For Eaters', 'For Trucks'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className={`font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-orange-600' : 'text-gray-800 lg:text-white/90 lg:hover:text-white hover:text-orange-600'
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <Button
                    variant={isScrolled ? 'primary' : 'secondary'}
                    className="hidden md:block shadow-none"
                    onClick={() => document.getElementById('download').scrollIntoView({ behavior: 'smooth' })}
                >
                    Get the App
                </Button>
            </div>
        </motion.nav>
    );
}
