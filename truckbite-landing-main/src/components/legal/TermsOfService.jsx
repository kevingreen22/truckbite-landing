import React from 'react';
import { useParams } from 'react-router-dom';

export function TermsOfService() {
    const { type } = useParams();
    const isVendor = type === 'vendor';

    if (isVendor) {
        return <VendorTerms />;
    }
    return <ConsumerTerms />;
}

function ConsumerTerms() {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
            <p className="text-xl text-gray-600">TruckBite (Consumer App)</p>
            <p className="text-sm text-gray-500 border-b border-gray-100 pb-8">Version: 1.1 &bull; Last Updated: {new Date().toLocaleDateString()}</p>

            <p className="text-gray-600">By using the TruckBite consumer application (“App”), you agree to these Terms of Service (“Terms”).</p>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">1. Eligibility</h2>
                <p className="text-gray-600">You must be at least 13 years old to use the App.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">2. Permitted Use</h2>
                <p className="text-gray-600 font-semibold">You may:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>View food truck locations and details</li>
                    <li>Save food trucks as favorites</li>
                </ul>
                <p className="text-gray-600 font-semibold mt-4">You may not:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Misuse, disrupt, or abuse the App</li>
                    <li>Submit false or misleading reports</li>
                    <li>Attempt to reverse engineer or interfere with the App</li>
                    <li>Upload or generate objectionable content, including but not limited to hate speech, harassment, or explicit material</li>
                </ul>
                <p className="text-gray-600 mt-2 font-bold">Zero Tolerance Policy:</p>
                <p className="text-gray-600">TruckBite maintains a zero-tolerance policy for objectionable content and abusive users. Content violations will result in immediate removal, and abusive users will be banned from the platform.</p>
                <p className="text-gray-600 mt-2">Anonymous accounts may be removed after extended periods of inactivity.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">3. Location & Accuracy Disclaimer</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Food truck locations, schedules, and availability are provided by vendors</li>
                    <li>TruckBite does not guarantee accuracy, completeness, or availability</li>
                    <li>Location information is displayed only while vendors are online</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">4. Subscriptions & Payments</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Free and paid tiers may be offered</li>
                    <li>Payments and subscriptions are managed by Apple via the App Store</li>
                    <li>Refunds are governed by Apple’s refund policies</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">5. Intellectual Property</h2>
                <p className="text-gray-600">All App software, design, branding, and trademarks are owned by TruckBite.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">6. Disclaimers</h2>
                <p className="text-gray-600">The App is provided “as is” and “as available,” without warranties of any kind.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">7. Limitation of Liability</h2>
                <p className="text-gray-600">To the maximum extent permitted by law, TruckBite is not liable for damages arising from use of the App.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">8. Termination</h2>
                <p className="text-gray-600">We may suspend or terminate accounts that violate these Terms.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">9. Governing Law</h2>
                <p className="text-gray-600">These Terms are governed by the laws of the State of California, USA.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">10. Legal Notices</h2>
                <h3 className="text-lg font-semibold text-gray-800">Copyright</h3>
                <p className="text-gray-600">All content is owned by TruckBite unless otherwise noted.</p>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">DMCA</h3>
                <p className="text-gray-600">Copyright claims: <a href="mailto:support@truckbite.com" className="text-orange-600 hover:underline">support@truckbite.com</a></p>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">Indemnification</h3>
                <p className="text-gray-600">You agree to indemnify and hold TruckBite harmless from claims arising from your use of the App.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">11. Dispute Resolution</h2>
                <p className="text-gray-600">
                    Any disputes arising from these Terms shall be resolved through binding arbitration in the State of California, USA.
                    You agree to waive your right to a jury trial and to participate in any class action lawsuit.
                </p>
            </section>
        </div>
    );
}

function VendorTerms() {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
            <p className="text-xl text-gray-600">TruckBite – Vendor</p>
            <p className="text-sm text-gray-500 border-b border-gray-100 pb-8">Version: 1.1 &bull; Last Updated: {new Date().toLocaleDateString()}</p>

            <p className="text-gray-600">By using the TruckBite – Vendor application (“App”), you agree to these Terms.</p>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">1. Eligibility</h2>
                <p className="text-gray-600">You must be at least 18 years old to create a vendor account.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">2. Vendor Responsibilities</h2>
                <p className="text-gray-600 font-semibold">Vendors are solely responsible for:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Business licensing and regulatory compliance</li>
                    <li>Food safety and preparation</li>
                    <li>Accuracy of menus, pricing, hours, and availability</li>
                    <li>Customer interactions and fulfillment</li>
                </ul>
                <p className="text-gray-600 mt-2">TruckBite is a discovery and visibility platform only.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">3. Use of the App</h2>
                <p className="text-gray-600 font-semibold">Vendors may:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Broadcast live location while online</li>
                    <li>Upload menus, photos, and branding content</li>
                </ul>
                <p className="text-gray-600 font-semibold mt-4">Vendors may not:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Upload false, misleading, or offensive content</li>
                    <li>Upload content without proper rights or permissions</li>
                    <li>Post objectionable content (hate speech, nudity, violence, etc.)</li>
                </ul>
                <p className="text-gray-600 mt-2 font-bold">Zero Tolerance Policy:</p>
                <p className="text-gray-600">TruckBite enforces a strict zero-tolerance policy. Any vendor found posting objectionable content will have their content removed and their account immediately suspended or terminated.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">4. Subscriptions & Payments</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Free and paid tiers may include feature limitations</li>
                    <li>Payments are processed by Apple via the App Store</li>
                    <li>Refunds are governed by Apple’s policies</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">5. Content Ownership & License</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Vendors retain ownership of uploaded content.</li>
                    <li>By uploading, you grant TruckBite a non-exclusive license to display and promote that content within the App.</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">6. Location Disclaimer</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Location is shared only while online</li>
                    <li>Visibility and customer discovery are not guaranteed</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">7. Disclaimers</h2>
                <p className="text-gray-600">The App is provided “as is” and “as available.”</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">8. Limitation of Liability</h2>
                <p className="text-gray-600">To the maximum extent permitted by law, TruckBite is not liable for damages arising from App use.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">9. Termination</h2>
                <p className="text-gray-600">We may suspend or terminate accounts for violations of these Terms or the Content Guidelines.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">10. Legal Notices</h2>
                <h3 className="text-lg font-semibold text-gray-800">Copyright</h3>
                <p className="text-gray-600">All App content is owned by TruckBite, excluding vendor-uploaded materials.</p>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">DMCA</h3>
                <p className="text-gray-600">Claims: <a href="mailto:support@truckbite.com" className="text-orange-600 hover:underline">support@truckbite.com</a></p>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">Indemnification</h3>
                <p className="text-gray-600">Vendors agree to indemnify TruckBite against claims related to content, business operations, or customer disputes.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">11. Governing Law</h2>
                <p className="text-gray-600">These Terms are governed by the laws of the State of California, USA.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">12. Dispute Resolution</h2>
                <p className="text-gray-600">
                    Any disputes arising from these Terms shall be resolved through binding arbitration in the State of California, USA.
                    You agree to waive your right to a jury trial and to participate in any class action lawsuit.
                </p>
            </section>
        </div>
    );
}

