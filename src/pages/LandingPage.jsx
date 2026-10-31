import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ClerkProvider } from '@clerk/react';
import { CLERK_KEYS } from '../config/waitlist';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { ConsumerWaitlist } from '../components/sections/ConsumerWaitlist';
import { ScrollProgressTruck } from '../components/ui/ScrollProgressTruck';
import { Footer } from '../components/layout/Footer';

export function LandingPage() {
    const page = <LandingContent />;
    // Clerk (consumer waitlist application) is loaded only when its key is set.
    return CLERK_KEYS.consumer
        ? <ClerkProvider publishableKey={CLERK_KEYS.consumer}>{page}</ClerkProvider>
        : page;
}

function LandingContent() {
    const { hash } = useLocation();
    const navigate = useNavigate();

    // Old links to /#for-trucks now go to the dedicated vendor page
    useEffect(() => {
        if (hash === '#for-trucks') navigate('/vendors', { replace: true });
    }, [hash, navigate]);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden selection:bg-orange-200">
            <ScrollProgressTruck />
            <Navbar />
            <main>
                <Hero />
                <Features ids={['for-eaters']} />
                <ConsumerWaitlist />
            </main>
            <Footer />
        </div>
    );
}
