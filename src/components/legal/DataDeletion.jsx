import React from 'react';
import { useParams } from 'react-router-dom';

export function DataDeletion() {
    const { type } = useParams();
    const isVendor = type === 'vendor';

    if (isVendor) {
        return <VendorDataDeletion />;
    }
    return <ConsumerDataDeletion />;
}

function ConsumerDataDeletion() {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">User Data Deletion</h1>
            <p className="text-xl text-gray-600">TruckBite (Consumer App)</p>
            <p className="text-sm text-gray-500 border-b border-gray-100 pb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <p className="text-gray-600">You have full control over your TruckBite account and data. You can delete your account at any time directly from the app.</p>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">How to Delete Your Account</h2>

                <h3 className="text-lg font-semibold text-gray-800">In-App Deletion (Recommended)</h3>
                <p className="text-gray-600">Follow these simple steps to delete your account:</p>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                    <li>Open the TruckBite app</li>
                    <li>Go to your Profile tab</li>
                    <li>Tap on Settings (gear icon)</li>
                    <li>Scroll to the bottom and tap "Delete Account"</li>
                    <li>Confirm your decision when prompted</li>
                </ol>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-4">
                    <p className="text-sm text-gray-700">
                        <strong>Note:</strong> Account deletion is immediate and permanent. All your data, including favorites and preferences, will be permanently deleted and cannot be recovered.
                    </p>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">What Data Is Deleted</h2>
                <p className="text-gray-600">When you delete your account, we permanently remove:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Your profile information (name, email, profile image)</li>
                    <li>Your saved favorites</li>
                    <li>Your preferences and settings</li>
                    <li>Your notification preferences</li>
                    <li>All associated personal data</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Deletion Timeline</h2>
                <p className="text-gray-600">Your account and data are deleted immediately upon confirmation. Some data may persist in backups for up to 30 days before being permanently purged from all systems.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Alternative Contact Method</h2>
                <p className="text-gray-600">If you're unable to access the app or encounter issues deleting your account, please contact us at <a href="mailto:support@truckbite.com" className="text-orange-600 hover:underline">support@truckbite.com</a> with the subject line "Account Deletion Request" and we'll assist you.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Questions?</h2>
                <p className="text-gray-600">For any questions about data deletion or privacy, please contact: <a href="mailto:support@truckbite.com" className="text-orange-600 hover:underline">support@truckbite.com</a></p>
            </section>
        </div>
    );
}

function VendorDataDeletion() {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">User Data Deletion</h1>
            <p className="text-xl text-gray-600">TruckBite – Vendor</p>
            <p className="text-sm text-gray-500 border-b border-gray-100 pb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <p className="text-gray-600">As a vendor, you have complete control over your business account and data. You can delete your vendor account at any time directly from the app.</p>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">How to Delete Your Vendor Account</h2>

                <h3 className="text-lg font-semibold text-gray-800">In-App Deletion (Recommended)</h3>
                <p className="text-gray-600">Follow these simple steps to delete your vendor account:</p>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                    <li>Open the TruckBite – Vendor app</li>
                    <li>Go to your Profile/Settings tab</li>
                    <li>Tap on Account Settings</li>
                    <li>Scroll to the bottom and tap "Delete Vendor Account"</li>
                    <li>Confirm your decision when prompted</li>
                </ol>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-4">
                    <p className="text-sm text-gray-700">
                        <strong>Important:</strong> Deleting your vendor account is immediate and permanent. Your business profile will be removed from the TruckBite platform, and all associated data will be permanently deleted.
                    </p>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">What Data Is Deleted</h2>
                <p className="text-gray-600">When you delete your vendor account, we permanently remove:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Your vendor profile (business name, email, contact information)</li>
                    <li>Your business information (cuisine type, description, hours)</li>
                    <li>All uploaded photos and media (logo, menu items, gallery)</li>
                    <li>Location history and analytics data</li>
                    <li>Social media links and connections</li>
                    <li>All subscription and billing information</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Subscription Cancellation</h2>
                <p className="text-gray-600">Deleting your account will automatically cancel any active subscriptions. No further charges will be applied after deletion. Please note that we do not provide refunds for unused subscription time.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Deletion Timeline</h2>
                <p className="text-gray-600">Your vendor account and all associated data are deleted immediately upon confirmation. Your business profile will be removed from customer-facing apps within minutes. Some data may persist in backups for up to 30 days before being permanently purged from all systems.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Alternative Contact Method</h2>
                <p className="text-gray-600">If you're unable to access the app or encounter issues deleting your account, please contact us at <a href="mailto:support@truckbite.com" className="text-orange-600 hover:underline">support@truckbite.com</a> with the subject line "Vendor Account Deletion Request" and we'll assist you.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">Questions?</h2>
                <p className="text-gray-600">For any questions about data deletion or privacy, please contact: <a href="mailto:support@truckbite.com" className="text-orange-600 hover:underline">support@truckbite.com</a></p>
            </section>
        </div>
    );
}
