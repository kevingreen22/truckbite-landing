import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '../ui/Button';
import logoImage from '../../assets/images/app_icon.png';
import vendorLogoImage from '../../assets/images/app_icon_vendor.png';

// For Eaters is orange, For Trucks is teal, on both pages
const NAV_LINKS = [
    { label: 'For Eaters', to: '/', color: 'text-orange-600 hover:text-orange-700', underline: 'decoration-orange-600' },
    { label: 'For Trucks', to: '/vendors', color: 'text-vendor-600 hover:text-vendor-700', underline: 'decoration-vendor-600' },
];

export function Navbar({ ctaLabel = 'Join Waitlist', ctaTarget = 'waitlist', theme = 'orange' }) {
    const vendor = theme === 'teal';
    const { pathname } = useLocation();
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
                <Link to="/" className="flex items-center gap-3 group">
                    {/* Logo Placeholder - will be replaced with real logo */}
                    <img
                        src={vendor ? vendorLogoImage : logoImage}
                        alt={vendor ? 'TruckBite Vendor Logo' : 'TruckBite Logo'}
                        className={`h-10 w-auto group-hover:scale-105 transition-transform ${vendor ? 'rounded-xl' : ''}`}
                    />
                    <span className="text-2xl font-bold tracking-tight text-gray-900">
                        Truck<span className={vendor ? 'text-vendor-600' : 'text-orange-600'}>Bite</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className={`font-medium transition-colors ${item.color} ${pathname === item.to ? `underline underline-offset-8 decoration-2 ${item.underline}` : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <Button
                    variant={vendor ? (isScrolled ? 'vendor' : 'vendorSecondary') : (isScrolled ? 'primary' : 'secondary')}
                    className="hidden md:block shadow-none"
                    onClick={() => document.getElementById(ctaTarget)?.scrollIntoView({ behavior: 'smooth' })}
                >
                    {ctaLabel}
                </Button>
            </div>
        </motion.nav>
    );
}
