import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { useWaitlist } from '@clerk/react';
import { Button } from './Button';
import { CLERK_PUBLISHABLE_KEY, WAITLIST_PERK } from '../../config/waitlist';

const inputClass =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200';

function Card({ children }) {
    return <div className="rounded-3xl bg-white p-8 shadow-xl border border-orange-100">{children}</div>;
}

// Must be rendered inside <ClerkProvider> (VendorPage provides it).
function ClerkWaitlistForm({ id }) {
    const { waitlist, errors, fetchStatus } = useWaitlist();
    const [submitError, setSubmitError] = React.useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitError('');
        const emailAddress = new FormData(e.currentTarget).get('emailAddress');
        const { error } = await waitlist.join({ emailAddress });
        if (error) {
            console.error('Failed to join waitlist:', error);
            setSubmitError('Something went wrong. Please try again.');
        }
    }

    if (waitlist.id) {
        return (
            <Card>
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
        <Card>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Join the vendor waitlist</h3>
            <p className="text-gray-600 mb-6">Be first to know the day TruckBite launches.</p>

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
                        className={inputClass}
                    />
                    {fieldError && <p role="alert" className="mt-2 text-sm text-red-600">{fieldError}</p>}
                </div>

                <Button type="submit" disabled={busy} className="w-full disabled:opacity-60">
                    {busy ? 'Submitting...' : 'Join the Waitlist'}
                </Button>

                {submitError && <p role="alert" className="text-sm text-red-600">{submitError}</p>}
            </form>

            {WAITLIST_PERK && (
                <p className="mt-4 rounded-xl bg-orange-50 px-4 py-3 text-sm font-medium text-orange-700">
                    Waitlist perk: {WAITLIST_PERK}
                </p>
            )}

            <p className="mt-4 text-xs text-gray-500">
                Free to join. Launch updates only. See our{' '}
                <Link to="/privacy/vendor" className="underline hover:text-orange-600">Vendor Privacy Policy</Link>.
            </p>
        </Card>
    );
}

export function WaitlistForm({ id = 'main' }) {
    if (!CLERK_PUBLISHABLE_KEY) {
        return (
            <Card>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Waitlist coming soon</h3>
                <p className="text-gray-600">
                    The waitlist isn't connected yet. Set VITE_CLERK_PUBLISHABLE_KEY to enable it.
                </p>
            </Card>
        );
    }
    return <ClerkWaitlistForm id={id} />;
}
