import Link from 'next/link';

export default function RestaurantLandingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-xl space-y-4 rounded-3xl bg-white p-10 text-center shadow-xl ring-1 ring-gray-100">
        <h1 className="text-3xl font-semibold text-gray-900">
          Sorry, we couldn't find the page you're looking for.
        </h1>
        <Link
          href="/main/home"
          className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          Go to home feed
        </Link>
      </div>
    </div>
  );
}
