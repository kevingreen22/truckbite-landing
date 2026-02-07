import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Download } from '../components/sections/Download';
import { ScrollProgressTruck } from '../components/ui/ScrollProgressTruck';
import { Footer } from '../components/layout/Footer';

export function LandingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden selection:bg-orange-200">
            <ScrollProgressTruck />
            <Navbar />
            <main>
                <Hero />
                <Features />
                <Download />
            </main>
            <Footer />
        </div>
    );
}
