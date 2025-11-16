'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/app/components/Header';

const chefs = [
  {
    id: 1,
    name: 'Homestyle Ramen by Aiko',
    prepTime: '30 – 40 mins',
    deliveryFee: '$1.99 delivery fee',
    rating: 9.7,
    img: '/placeholder1.jpg'
  },
  {
    id: 2,
    name: 'Vegan Bento by Mira',
    prepTime: '35 – 45 mins',
    deliveryFee: '$0 delivery fee',
    rating: 9.3,
    img: '/placeholder1.jpg'
  },
  {
    id: 3,
    name: 'Sushi Rolls by Kenji',
    prepTime: '40 – 55 mins',
    deliveryFee: '$1.49 delivery fee',
    rating: 9.5,
    img: '/placeholder1.jpg'
  },
];

const nationalFaves = [
  {
    id: 4,
    name: 'Pizza by Sofia',
    prepTime: '25 – 35 mins',
    deliveryFee: '$0.99 delivery fee',
    rating: 9.9,
    img: '/placeholder1.jpg'
  },
  {
    id: 5,
    name: 'Fried Chicken by Ray',
    prepTime: '30 – 40 mins',
    deliveryFee: '$0.79 delivery fee',
    rating: 9.4,
    img: '/placeholder1.jpg'
  },
  {
    id: 6,
    name: 'Classic Italian by Marco',
    prepTime: '30 – 40 mins',
    deliveryFee: '$0.79 delivery fee',
    rating: 9.3,
    img: '/placeholder1.jpg'
  },
];

export default function ChefsUpPage() {
  const [search, setSearch] = useState('');
  const handleSearchChange = (value: string) => setSearch(value);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header search={search} onSearchChange={handleSearchChange} />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 md:px-6">
        {/* Featured Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">Featured Home Chefs</h2>
          <p className="mt-1 text-sm text-gray-500">Handpicked options curated for tonight.</p>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {chefs.map((chef) => (
              <div
                key={chef.id}
                className="overflow-hidden rounded-3xl border border-gray-100 bg-white/90 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative h-36 w-full">
                  <Image
                    src={chef.img}
                    alt={chef.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-2 p-5">
                  <h3 className="text-lg font-semibold text-gray-900">{chef.name}</h3>
                  <p className="text-sm text-gray-600">
                    {chef.prepTime} <span className="text-gray-400">•</span> {chef.deliveryFee}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-sm">
                    <span className="text-orange-500">★</span>
                    <span className="font-semibold text-gray-900">{chef.rating}</span>
                    <span className="text-gray-400">Customer rating</span>
                  </div>
                </div>
              </div>
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
            {nationalFaves.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-3xl border border-gray-100 bg-white/90 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative h-36 w-full">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-2 p-5">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.prepTime} <span className="text-gray-400">•</span> {item.deliveryFee}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-sm">
                    <span className="text-orange-500">★</span>
                    <span className="font-semibold text-gray-900">{item.rating}</span>
                    <span className="text-gray-400">Customer rating</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
