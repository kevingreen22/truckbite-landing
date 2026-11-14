import React from 'react';

export function AcceptableUsePolicy() {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">Content Guidelines / Acceptable Use Policy</h1>
            <p className="text-xl text-gray-600">TruckBite – Vendor</p>
            <p className="text-sm text-gray-500 border-b border-gray-100 pb-8">Version: 1.1 &bull; Last Updated: {new Date().toLocaleDateString()}</p>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Allowed Content</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Photos of your food truck and food</li>
                    <li>Menus, pricing, and business details</li>
                    <li>Logos and branding you own or are licensed to use</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Prohibited Content</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Offensive, discriminatory, or explicit material</li>
                    <li>False or misleading menus, pricing, or locations</li>
                    <li>Copyrighted content without authorization</li>
                    <li>Non–food-related advertising</li>
                    <li>Spam or low-quality uploads</li>
                </ul>
                <p className="text-gray-600 mt-2 font-bold">Zero Tolerance:</p>
                <p className="text-gray-600">We have a zero-tolerance policy for objectionable content. Violations will result in immediate content removal and account termination.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Enforcement</h2>
                <p className="text-gray-600">TruckBite reserves the right to remove content or suspend accounts that violate this policy.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Responsibility</h2>
                <p className="text-gray-600">Vendors are responsible for ensuring their content complies with applicable laws and regulations.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
                <p className="text-gray-600">Content moderation inquiries: <a href="mailto:support@truckbite.com" className="text-orange-600 hover:underline">support@truckbite.com</a></p>
            </section>
        </div>
    );
}
