import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function LegalLayout() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-orange-200">
            <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors font-medium">
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                    <div className="text-xl font-bold">
                        Truck<span className="text-orange-600">Bite</span>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 pt-32 pb-24 max-w-4xl">
                <div className="prose prose-orange lg:prose-lg max-w-none">
                    <Outlet />
                </div>
            </main>

            <footer className="bg-gray-50 border-t border-gray-100 py-12 text-center text-sm text-gray-500">
                <div className="container mx-auto px-6">
                    <p>&copy; {new Date().getFullYear()} TruckBite. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
