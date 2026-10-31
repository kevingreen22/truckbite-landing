import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useWaitlist } from '@clerk/react';
import { Button } from './Button';
import { CLERK_KEYS, WAITLIST_PERKS } from '../../config/waitlist';

const COPY = {
    vendor: {
        title: 'Join the vendor waitlist',
        subtitle: 'Be first to know the day TruckBite launches.',
        privacyPath: '/privacy/vendor',
        privacyLabel: 'Vendor Privacy Policy',
    },
    consumer: {
        title: 'Join the waitlist',
        subtitle: 'Get an email the day TruckBite launches.',
        privacyPath: '/privacy/consumer',
        privacyLabel: 'Privacy Policy',
    },
};

const baseInput =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2';

const THEME = {
    vendor: {
        input: `${baseInput} focus:border-vendor-500 focus:ring-vendor-200`,
        button: 'vendor',
        border: 'border-vendor-100',
        perk: 'bg-vendor-50 text-vendor-700',
        link: 'hover:text-vendor-600',
    },
    consumer: {
        input: `${baseInput} focus:border-orange-500 focus:ring-orange-200`,
        button: 'primary',
        border: 'border-orange-100',
        perk: 'bg-orange-50 text-orange-700',
        link: 'hover:text-orange-600',
    },
};

function Card({ children, audience = 'vendor' }) {
    return <div className={`rounded-3xl bg-white p-8 shadow-xl border ${THEME[audience].border}`}>{children}</div>;
}

// Must be rendered inside <ClerkProvider> (VendorPage provides it).
function ClerkWaitlistForm({ id, audience }) {
    const copy = COPY[audience];
    const theme = THEME[audience];
    const perk = WAITLIST_PERKS[audience];
    const { waitlist, errors, fetchStatus } = useWaitlist();
    const [submitError, setSubmitError] = React.useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitError('');
        const emailAddress = new FormData(e.currentTarget).get('emailAddress');
        const { error } = await waitlist.join({ emailAddress });
        if (error) {
            console.error('Failed to join waitlist:', error, errors);
            // Show Clerk's own reason when it gives one (also helps while setting up)
            const reason = error.longMessage || error.message;
            const code = error.code ? ` (${error.code})` : '';
            setSubmitError(reason ? `${reason}${code}` : 'Something went wrong. Please try again.');
        }
    }

    if (waitlist.id) {
        return (
            <Card audience={audience}>
                <div className="text-center">
                    <CheckCircle2 className="mx-auto mb-4 text-green-600" size={48} />
                    <h3 className="text-2xl font-bold text-gray-900">You're on the list!</h3>
                    <p className="mt-2 text-gray-600">
                        Check your inbox for a confirmation. We'll email you when TruckBite launches.
                    </p>
                </div>
            </Card>
        );
    }

    const busy = fetchStatus === 'fetching';
    const fieldError = errors?.fields?.emailAddress?.longMessage;

    return (
        <Card audience={audience}>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{copy.title}</h3>
            <p className="text-gray-600 mb-6">{copy.subtitle}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor={`email-${id}`} className="sr-only">Email address</label>
                    <input
                        id={`email-${id}`}
                        type="email"
                        name="emailAddress"
                        required
                        autoComplete="email"
                        placeholder="Email address"
                        className={theme.input}
                    />
                    {fieldError && <p role="alert" className="mt-2 text-sm text-red-600">{fieldError}</p>}
                </div>

                <Button type="submit" variant={theme.button} disabled={busy} className="w-full disabled:opacity-60">
                    {busy ? 'Submitting...' : 'Join the Waitlist'}
                </Button>

                {submitError && <p role="alert" className="text-sm text-red-600">{submitError}</p>}
            </form>

            {perk && (
                <p className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${theme.perk}`}>
                    Waitlist perk: {perk}
                </p>
            )}

            <p className="mt-4 text-xs text-gray-500">
                Free to join. Launch updates only. See our{' '}
                <Link to={copy.privacyPath} className={`underline ${theme.link}`}>{copy.privacyLabel}</Link>.
            </p>
        </Card>
    );
}

export function WaitlistForm({ id = 'main', audience = 'vendor' }) {
    if (!CLERK_KEYS[audience]) {
        return (
            <Card audience={audience}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Waitlist coming soon</h3>
                <p className="text-gray-600">
                    The waitlist isn't connected yet. Add this waitlist's Clerk key to enable it.
                </p>
            </Card>
        );
    }
    return <ClerkWaitlistForm id={id} audience={audience} />;
}
