const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

let initialized = false;

/** Initialize Google Analytics only when a GA4 Measurement ID is configured. */
export function initializeAnalytics() {
    if (typeof window === 'undefined' || !MEASUREMENT_ID || initialized) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    // React Router sends page views so SPA navigation is measured correctly.
    window.gtag('config', MEASUREMENT_ID, { send_page_view: false });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);

    initialized = true;
}

export function trackPageView(path, title) {
    if (typeof window === 'undefined' || !window.gtag || !MEASUREMENT_ID) return;

    window.gtag('event', 'page_view', {
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: path,
    });
}

/** Send aggregate conversion data only. Never pass email addresses or other PII. */
export function trackWaitlistSignup(audience) {
    if (typeof window === 'undefined' || !window.gtag || !MEASUREMENT_ID) return;

    // Separate event names make consumer/vendor totals easy to report without
    // configuring custom dimensions in the GA4 interface.
    const eventName = audience === 'vendor'
        ? 'vendor_waitlist_signup'
        : 'consumer_waitlist_signup';

    window.gtag('event', eventName, {
        method: 'clerk_waitlist',
    });
}
