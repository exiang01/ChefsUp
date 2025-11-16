import Image from "next/image";
import Link from "next/link";

type IconProps = {
  className?: string;
};

const LocationPin = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden className={`${className} text-[#ff8c1a]`}>
    <path
      fill="currentColor"
      d="M12 2.5a6.5 6.5 0 0 0-6.5 6.5c0 4.22 5.37 10.19 5.6 10.44.47.52 1.33.52 1.8 0 .23-.25 5.6-6.22 5.6-10.44A6.5 6.5 0 0 0 12 2.5zm0 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4">
    <path
      fill="currentColor"
      d="M6 12.75h10.19l-2.47 2.53a.75.75 0 0 0 1.06 1.06l3.85-3.85a.75.75 0 0 0 0-1.06l-3.85-3.85a.75.75 0 0 0-1.06 1.06l2.48 2.53H6a.75.75 0 0 0 0 1.5z"
    />
  </svg>
);

const HatIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className}>
    <path
      fill="currentColor"
      d="M5 10.5c-.83 0-1.5-.67-1.5-1.5S4.17 7.5 5 7.5c.16 0 .33.02.48.06A3.5 3.5 0 0 1 9 4a3.5 3.5 0 0 1 3 1.61A3.5 3.5 0 0 1 15 4a3.5 3.5 0 0 1 3.52 3.56A1.5 1.5 0 0 1 19 10.5H5zm2 2.25h10v2c0 1.66-2.24 3.25-5 3.25s-5-1.59-5-3.25z"
    />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-8 font-[var(--font-geist-sans)] sm:px-8">
        <header className="flex items-center justify-between gap-4 border-b border-zinc-200 pb-6">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full bg-white">
              <Image
                src="/images/logo.png"
                alt="ChefsUp logo"
                fill
                sizes="44px"
                priority
                className="object-contain p-1"
              />
            </div>
            <p className="text-xl font-semibold tracking-tight">ChefsUp</p>
          </div>
          <Link
            href="/auth"
            className="inline-flex items-center gap-2 rounded-full bg-[#ff8c1a] px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,140,26,0.35)] transition hover:bg-[#f17a00]"
          >
            <HatIcon />
            Chef Sign In
          </Link>
        </header>

        <main className="mt-16 flex flex-col gap-12">
          <section className="rounded-[32px] bg-gradient-to-b from-white via-[#fff9f0] to-[#ffeacf] p-8 text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)] sm:p-16 sm:text-left">
            <div className="max-w-3xl">
              <p className="text-4xl font-black leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
                Home-cooked meals {" "}
                <span className="text-[#ff8c1a]">delivered to your door</span>
              </p>
              <p className="mt-6 text-lg text-zinc-600">
                Enter your address to get started and enjoy home cooked meals
              </p>
            </div>

            <form className="mt-10 flex flex-col gap-4 sm:flex-row">
              <label className="flex flex-1 items-center gap-3 rounded-full bg-white px-5 py-3 text-left text-base text-zinc-500 shadow-[0_10px_40px_rgba(15,23,42,0.06)] ring-1 ring-zinc-100 focus-within:ring-2 focus-within:ring-[#ff8c1a]">
                <LocationPin />
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  className="w-full border-0 bg-transparent text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
                />
              </label>
              <button
                type="button"
                className="flex h-14 w-full items-center justify-center rounded-full bg-[#ff8c1a] text-white shadow-[0_12px_30px_rgba(255,140,26,0.35)] transition hover:bg-[#f17a00] sm:w-14"
              >
                <ArrowIcon />
              </button>
            </form>
          </section>
        </main>
      </div>
      <section className="mt-12 bg-[#ff8c1a] px-4 py-12 text-white sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl font-[var(--font-geist-sans)]">
          <h3 className="text-3xl font-semibold sm:text-4xl">Become a Chef</h3>
          <p className="mt-3 max-w-2xl text-base text-white/90 sm:text-lg">
            As a chef, you get to share your cultural cuisine with others and make
            money
          </p>
          <Link
            href="/chef"
            className="mt-5 inline-flex items-center gap-2 text-base font-semibold"
          >
            Sign up for ChefsUp
            <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4">
              <path
                fill="currentColor"
                d="M6.75 12a.75.75 0 0 1 .75-.75h7.19l-1.72-1.72a.75.75 0 1 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 1 1-1.06-1.06l1.72-1.72H7.5a.75.75 0 0 1-.75-.75z"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
