import { useEffect } from 'react';
import { ClerkProvider } from '@clerk/react';
import { CLERK_PUBLISHABLE_KEY } from '../config/waitlist';
import { Navbar } from '../components/layout/Navbar';
import { VendorHero } from '../components/sections/VendorHero';
import { Features } from '../components/sections/Features';
import { WaitlistCTA } from '../components/sections/WaitlistCTA';
import { ScrollProgressTruck } from '../components/ui/ScrollProgressTruck';
import { Footer } from '../components/layout/Footer';

export function VendorPage() {
    const page = <VendorContent />;
    // Clerk is loaded only on this page, so the consumer page stays lightweight.
    return CLERK_PUBLISHABLE_KEY
        ? <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>{page}</ClerkProvider>
        : page;
}

function VendorContent() {
    useEffect(() => {
        const previous = document.title;
        document.title = 'TruckBite for Food Trucks - Join the Waitlist';
        return () => { document.title = previous; };
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden selection:bg-orange-200">
            <ScrollProgressTruck />
            <Navbar ctaLabel="Join Waitlist" ctaTarget="waitlist" />
            <main>
                <VendorHero />
                <Features ids={['for-trucks']} />
                <WaitlistCTA />
            </main>
            <Footer />
        </div>
    );
}
