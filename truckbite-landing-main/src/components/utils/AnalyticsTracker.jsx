import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeAnalytics, trackPageView } from '../../config/analytics';

export function AnalyticsTracker() {
    const location = useLocation();
    const lastPageView = useRef('');

    useEffect(() => {
        initializeAnalytics();
    }, []);

    useEffect(() => {
        const page = `${location.pathname}${location.search}${location.hash}`;
        // Avoid duplicate page views during React StrictMode's development remount.
        if (lastPageView.current === page) return;
        lastPageView.current = page;
        trackPageView(page);
    }, [location.pathname, location.search, location.hash]);

    return null;
}
