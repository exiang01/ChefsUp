'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';

import { featuredChefs, nationalFaves } from '@/app/data/restaurants';

export default function ChefsUpPage() {
  const filteredFeatured = featuredChefs;
  const filteredNational = nationalFaves;

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header logoHref="/.." />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 md:px-6">
        {/* Featured Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">Featured Home Chefs</h2>
          <p className="mt-1 text-sm text-gray-500">Handpicked options curated for tonight.</p>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredFeatured.map((chef) => (
              <Link
                key={chef.id}
                href={`/main/restaurant/${chef.slug}`}
                className="block overflow-hidden rounded-3xl border border-gray-100 bg-white/90 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                aria-label={`View ${chef.name} details`}
              >
                <div className="relative h-36 w-full">
                  <Image
                    src={chef.img}
                    alt={chef.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="space-y-2 p-5">
                  <h3 className="text-lg font-semibold text-gray-900">{chef.name}</h3>
                  <p className="text-sm text-gray-600">
                    {chef.prepTime} <span className="text-gray-400">•</span> {chef.deliveryFee}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-orange-500">★</span>
                      <span className="font-semibold text-gray-900">{chef.rating}</span>
                    </div>
                    <span className="text-gray-500">{chef.cuisine}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* National Faves Section */}
        <section className="mt-12">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Popular on ChefsUp</h2>
              <p className="mt-1 text-sm text-gray-500">National favourites everyone is loving.</p>
            </div>
            <button className="text-sm font-semibold text-orange-500">View All</button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNational.map((item) => (
              <Link
                key={item.id}
                href={`/main/restaurant/${item.slug}`}
                className="block overflow-hidden rounded-3xl border border-gray-100 bg-white/90 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                aria-label={`View ${item.name} details`}
              >
                <div className="relative h-36 w-full">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="space-y-2 p-5">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.prepTime} <span className="text-gray-400">•</span> {item.deliveryFee}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-orange-500">★</span>
                      <span className="font-semibold text-gray-900">{item.rating}</span>
                    </div>
                    <span className="text-gray-500">{item.cuisine}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
