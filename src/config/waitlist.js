// Optional perk shown under the waitlist form. Leave empty until you are sure
// you can honor it (for example: 'A free month of premium at launch').
export const WAITLIST_PERK = '';

// Clerk publishable key, set as VITE_CLERK_PUBLISHABLE_KEY in .env.local for
// local dev and in the Vercel project's environment variables for production.
// The publishable key is safe to expose. NEVER put a Clerk secret key in this repo.
export const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
