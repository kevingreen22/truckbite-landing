// Google Analytics 4 helpers for the TruckBite landing site.
const GA_MEASUREMENT_ID = 'G-PJW9VY2F1E';

export function trackEvent(eventName, parameters = {}) {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', eventName, parameters);
}

export function AnalyticsPageTracker() {
    // Kept in this module so the tracker can be used inside the React Router tree.
    return null;
}
