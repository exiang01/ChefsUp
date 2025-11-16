'use client';

import { ChangeEvent } from 'react';

type HeaderProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export default function Header({ search, onSearchChange }: HeaderProps) {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <header className="bg-white/95 shadow-sm ring-1 ring-gray-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5">
        <div className="flex w-full items-center justify-between">
          <img
            src="/images/logo.png"
            alt="ChefsUp Logo"
            className="h-12 w-auto object-contain"
          />

          <div className="flex flex-1 items-center justify-center gap-3">
            <div className="flex min-w-[340px] items-center rounded-full border border-gray-200 bg-gray-50 px-5 py-3 focus-within:border-orange-500">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-6 text-gray-400"
              >
                <path
                  d="M11 4a7 7 0 1 1-4.95 11.95L4 18l2.05-2.05A7 7 0 0 1 11 4z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                />
              </svg>
              <input
                aria-label="Search chefs"
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search restaurants, chefs, or cuisines"
                className="ml-3 w-full bg-transparent text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-gray-300"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5 text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16" />
                <path d="M7 12h10" />
                <path d="M10 18h4" />
              </svg>
              Filters
            </button>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white text-base font-semibold">
            MB
          </div>
        </div>
      </div>
    </header>
  );
}
