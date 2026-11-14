// Perks shown under each waitlist form. Leave empty until you are sure you can
// honor them (for example: 'A free month of premium at launch').
export const WAITLIST_PERKS = {
    vendor: '',
    consumer: '',
};

// Clerk publishable keys. Each waitlist is its own Clerk application, because a
// Clerk app has a single waitlist and it only records an email address.
//   VITE_CLERK_PUBLISHABLE_KEY           -> vendor waitlist (/vendors)
//   VITE_CLERK_CONSUMER_PUBLISHABLE_KEY  -> consumer waitlist (/)
// Set them in .env.local for local dev and in Vercel's environment variables.
// Publishable keys are safe to expose. NEVER put a Clerk secret key in this repo.
export const CLERK_KEYS = {
    vendor: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
    consumer: import.meta.env.VITE_CLERK_CONSUMER_PUBLISHABLE_KEY,
};

// Clerk's browser script keeps ONE global instance per page load, and it stays
// bound to the first publishable key it was given. Moving between / and /vendors
// without a full page load (client-side navigation) would therefore leave the
// second page talking to the first page's Clerk application. This remembers
// which key the page load started with and forces a fresh load if another is
// needed. Returns false when a reload was triggered.
export function claimClerkKey(key) {
    if (typeof window === 'undefined') return true;
    const used = window.__truckbiteClerkKey;
    if (used && used !== key) {
        window.location.reload();
        return false;
    }
    window.__truckbiteClerkKey = key;
    return true;
}
