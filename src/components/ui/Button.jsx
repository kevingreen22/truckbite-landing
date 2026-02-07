import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({ children, className, variant = 'primary', ...props }) {
    const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg";

    const variants = {
        primary: "bg-orange-600 text-white hover:bg-orange-700 shadow-lg hover:shadow-orange-500/30",
        secondary: "bg-white text-orange-600 border-2 border-orange-100 hover:border-orange-200 hover:bg-orange-50",
        outline: "bg-transparent text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm",
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
}
