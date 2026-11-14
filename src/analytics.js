import React from 'react';
import { useLocation } from 'react-router-dom';

export function trackEvent(eventName, parameters = {}) {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    window.gtag('event', eventName, parameters);
}

export function AnalyticsPageTracker() {
    const location = useLocation();

    React.useEffect(() => {
        if (typeof window.gtag !== 'function') return;

        window.gtag('event', 'page_view', {
            page_path: `${location.pathname}${location.search}${location.hash}`,
            page_location: window.location.href,
            page_title: document.title,
        });
    }, [location.pathname, location.search, location.hash]);

    return null;
}
