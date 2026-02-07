import React from 'react';
import { useParams } from 'react-router-dom';

export function PrivacyPolicy() {
    const { type } = useParams();
    const isVendor = type === 'vendor';

    if (isVendor) {
        return <VendorPrivacy />;
    }
    return <ConsumerPrivacy />;
}

function ConsumerPrivacy() {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-xl text-gray-600">TruckBite (Consumer App)</p>
            <p className="text-sm text-gray-500 border-b border-gray-100 pb-8">Version: 1.1 &bull; Last Updated: {new Date().toLocaleDateString()}</p>

            <p className="text-gray-600">TruckBite (“we,” “our,” or “us”) respects your privacy. This Privacy Policy explains how we collect, use, and share information when you use the TruckBite mobile application (“App”).</p>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>

                <h3 className="text-lg font-semibold text-gray-800">Account Information</h3>
                <p className="text-gray-600">If you create an account, we collect information such as your name, email address, and profile image.</p>

                <h3 className="text-lg font-semibold text-gray-800">Location Information</h3>
                <p className="text-gray-600">With your permission, we collect your device’s location only to provide core app functionality, including showing nearby food trucks.</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Location access is optional</li>
                    <li>Location data is used in real time</li>
                    <li>We do not retain historical location data after it is no longer needed to provide this functionality</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800">Usage & Preferences</h3>
                <p className="text-gray-600">Favorites, feature usage, and interactions within the App.</p>

                <h3 className="text-lg font-semibold text-gray-800">Device & Diagnostics</h3>
                <p className="text-gray-600">Device type, operating system, app version, and crash or diagnostic logs.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">2. How We Use Information</h2>
                <p className="text-gray-600">We use information to:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Display nearby food trucks</li>
                    <li>Save and manage favorites</li>
                    <li>Send service-related and promotional notifications (optional)</li>
                    <li>Improve App reliability and features</li>
                    <li>Display sponsored or promoted listings, clearly labeled as such</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">3. Sharing of Information</h2>
                <p className="text-gray-600">We may share information with:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Service providers that help operate the App, such as Firebase, RevenueCat, Apple Maps, and potentially Google Maps</li>
                    <li>Authorities, when required by law</li>
                </ul>
                <p className="text-gray-600">We do not sell personal information.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">4. Your Choices & Controls</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Location permissions can be managed at any time in your device settings</li>
                    <li>Push notifications can be disabled through device settings</li>
                    <li>You may request account deletion by contacting <a href="mailto:support@truckbite.com" className="text-orange-600 hover:underline">support@truckbite.com</a></li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">5. Children’s Privacy</h2>
                <p className="text-gray-600">The App is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">6. Data Security</h2>
                <p className="text-gray-600">We use reasonable administrative and technical safeguards, but no system is completely secure.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
                <p className="text-gray-600">Privacy questions may be directed to: <a href="mailto:support@truckbite.com" className="text-orange-600 hover:underline">support@truckbite.com</a></p>
            </section>
        </div>
    );
}

function VendorPrivacy() {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-xl text-gray-600">TruckBite – Vendor</p>
            <p className="text-sm text-gray-500 border-b border-gray-100 pb-8">Version: 1.1 &bull; Last Updated: {new Date().toLocaleDateString()}</p>

            <p className="text-gray-600">This Privacy Policy explains how information is collected and used when you use the TruckBite – Vendor application (“App”).</p>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>

                <h3 className="text-lg font-semibold text-gray-800">Account & Business Information</h3>
                <p className="text-gray-600">Name, email address, business name, cuisine type, photos, menus, logos, and social links you choose to provide.</p>

                <h3 className="text-lg font-semibold text-gray-800">Location Information</h3>
                <p className="text-gray-600">When you mark your status as online, we collect and share your truck’s location only to provide real-time discovery to customers.</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Location sharing is controlled by you</li>
                    <li>Location data is not retained once you go offline</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800">Device & Diagnostics</h3>
                <p className="text-gray-600">Device type, app version, and crash or performance logs.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">2. How We Use Information</h2>
                <p className="text-gray-600">We use information to:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Display your live location and business profile</li>
                    <li>Show your content to customers</li>
                    <li>Manage subscriptions and billing</li>
                    <li>Improve App performance and reliability</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">3. Sharing of Information</h2>
                <p className="text-gray-600">We may share information:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>With customers using TruckBite</li>
                    <li>With service providers such as Firebase, RevenueCat, Apple Maps, and potentially Google Maps</li>
                    <li>When required by law</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">4. Your Controls</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>You control when your location is shared</li>
                    <li>Notifications can be managed via device settings</li>
                    <li>Account deletion requests can be submitted to <a href="mailto:support@truckbite.com" className="text-orange-600 hover:underline">support@truckbite.com</a></li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">5. Children’s Privacy</h2>
                <p className="text-gray-600">This App is intended for users 18 and older.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">6. Data Security</h2>
                <p className="text-gray-600">We use reasonable safeguards but cannot guarantee absolute security.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">7. Contact</h2>
                <p className="text-gray-600">Privacy inquiries: <a href="mailto:support@truckbite.com" className="text-orange-600 hover:underline">support@truckbite.com</a></p>
            </section>
        </div>
    );
}
