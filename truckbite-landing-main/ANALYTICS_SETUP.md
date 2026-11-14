# TruckBite website analytics setup

This implementation uses Google Analytics 4 (GA4) for aggregate website reporting. It does not send email addresses or other waitlist personal information to Google Analytics.

## 1. Create the free GA4 property

1. Go to https://analytics.google.com/ and sign in with the Google account you want to own TruckBite analytics.
2. Create an account/property named `TruckBite` (or use an existing TruckBite account if you already have one).
3. Add a **Web** data stream for `https://truckbite-landing.vercel.app`.
4. Copy the Measurement ID. It looks like `G-XXXXXXXXXX`.

## 2. Measurement ID is already configured

The production Measurement ID is included in the `.env.production` file in this ZIP:

`VITE_GA_MEASUREMENT_ID=G-PJW9VY2F1E`

Vite reads this file during the Vercel production build, so you do **not** need to add a Vercel Environment Variable separately. The Measurement ID is a public website identifier, not a password or secret.

For local development, you can add the same variable to `.env.local` (which should not be committed).

## 3. Avoid duplicate page views

The site sends page views through React Router so navigation inside the single-page app is measured. In GA4, open **Admin → Data streams → TruckBite Website → Enhanced measurement → Page views settings** and turn off **Page changes based on browser history events**. Leave the other Enhanced Measurement options as you prefer. This prevents GA4 from recording a second page view for the same React Router navigation.

## 4. Events collected

- `page_view`: page visits, including React Router navigation.
- `consumer_waitlist_signup`: fires when Clerk confirms a consumer waitlist entry.
- `vendor_waitlist_signup`: fires when Clerk confirms a vendor waitlist entry.

The signup events contain only the audience-specific event name and `method=clerk_waitlist`. Email addresses are never passed to GA4.

In GA4, open **Reports → Engagement → Events**. After each event has been received, mark `consumer_waitlist_signup` and `vendor_waitlist_signup` as **key events** if you want them treated as conversions. You can compare their event counts by **Session source / medium** and **Session campaign** in Traffic acquisition / Explorations.

## 5. QR code and campaign URLs

Use these as the destinations for replacement QR codes. They all lead to the existing pages; only the query parameters differ.

### Consumer flyer QR code

`https://truckbite-landing.vercel.app/?utm_source=flyer&utm_medium=print&utm_campaign=sf_launch&utm_content=consumer`

### Vendor flyer QR code

`https://truckbite-landing.vercel.app/vendors?utm_source=flyer&utm_medium=print&utm_campaign=sf_launch&utm_content=vendor`

### Instagram consumer bio link

`https://truckbite-landing.vercel.app/?utm_source=instagram&utm_medium=organic_social&utm_campaign=sf_launch&utm_content=consumer_bio`

### Instagram vendor bio/profile link

`https://truckbite-landing.vercel.app/vendors?utm_source=instagram&utm_medium=organic_social&utm_campaign=sf_launch&utm_content=vendor_bio`

Keep `utm_source`, `utm_medium`, and `utm_campaign` consistent when comparing campaigns. Use `utm_content` to distinguish creative or placement (for example `consumer`, `vendor`, `bio`, `story`, or `reel`). Avoid spaces; use underscores.

## 6. Test before printing QR codes

1. After the Vercel redeploy, open each tagged URL in a private/incognito window.
2. In GA4, open **Reports → Realtime** and confirm the visitor appears.
3. Submit a test consumer signup using an email address you control, then confirm `consumer_waitlist_signup` appears.
4. Repeat on `/vendors` and confirm `vendor_waitlist_signup` appears.
5. Do not repeatedly submit test signups to the real waitlists; use test addresses only if you can remove them from Clerk afterward.
6. Generate the new QR codes from the two flyer URLs above and scan each one before sending flyers to print.

GA4 reports can take time to populate outside Realtime. The updated source code, including `.env.production`, must be deployed before any traffic can be measured; historical visits are not collected retroactively.
