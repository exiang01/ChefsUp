import Link from 'next/link';

const inputClasses =
  'w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100';

export default function ChefSignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-orange-100">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-10">
        <header className="mb-8 flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-gray-900">Join ChefsUp</h1>
            <p className="text-sm text-gray-600">
              Share your home-cooked meals with thousands of neighbors.
            </p>
          </div>
          <Link
            href="/main/home"
            className="rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:text-orange-500"
          >
            Back to app
          </Link>
        </header>

        <div className="flex flex-1 flex-col gap-8 rounded-[32px] bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:flex-row">
          <section className="flex-1 space-y-5">
            <h2 className="text-xl font-semibold text-gray-900">About you</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="space-y-1 text-sm font-medium text-gray-700">
                First name
                <input type="text" placeholder="Aiko" className={inputClasses} />
              </label>
              <label className="space-y-1 text-sm font-medium text-gray-700">
                Last name
                <input type="text" placeholder="Tanaka" className={inputClasses} />
              </label>
            </div>
            <label className="space-y-1 text-sm font-medium text-gray-700">
              Email
              <input type="email" placeholder="you@example.com" className={inputClasses} />
            </label>
            <label className="space-y-1 text-sm font-medium text-gray-700">
              Phone number
              <input type="tel" placeholder="+1 (604) 555-1234" className={inputClasses} />
            </label>

            <h2 className="pt-3 text-xl font-semibold text-gray-900">Your kitchen</h2>
            <label className="space-y-1 text-sm font-medium text-gray-700">
              Signature dish or cuisine
              <input type="text" placeholder="Homestyle ramen, vegan bowls…" className={inputClasses} />
            </label>

            <label className="space-y-1 text-sm font-medium text-gray-700">
              About your cooking
              <textarea
                rows={4}
                placeholder="Tell us about your story, kitchen setup, and why diners will love your meals."
                className={`${inputClasses} resize-none`}
              />
            </label>
          </section>

          <section className="flex flex-1 flex-col justify-between rounded-3xl bg-gray-50/80 p-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Requirements</h2>
              <ul className="list-disc space-y-3 pl-5 text-sm text-gray-600">
                <li>Food Safe certificate or equivalent</li>
                <li>Clean kitchen and prep area</li>
                <li>Verification of Clean Kitchen</li>
              </ul>
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3 text-sm text-gray-600">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-200" />
                I agree to ChefsUp&apos;s community guidelines and food safety policies.
              </label>

              <Link
                href="/chef/create"
                className="flex w-full items-center justify-center rounded-full bg-orange-500 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(249,115,22,0.35)] transition hover:bg-orange-600"
              >
                Submit application
              </Link>

              <p className="text-center text-xs text-gray-500">
                We review every application manually. Expect an email within 2-3 business days.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
