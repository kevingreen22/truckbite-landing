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
