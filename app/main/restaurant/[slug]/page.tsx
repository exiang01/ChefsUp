import Image from 'next/image';
import Link from 'next/link';
import RestaurantLandingPage from '../page';
import {
  findRestaurantBySlug,
  restaurants,
} from '@/app/data/restaurants';
import Header from '@/app/components/Header';

type RestaurantPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return restaurants.map((restaurant) => ({
    slug: restaurant.slug,
  }));
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { slug } = await params;
  const restaurant = findRestaurantBySlug(slug);

  if (!restaurant) {
    return RestaurantLandingPage();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6 md:px-6">
        <Header logoHref="./../home"/>

        <article className="mt-6 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-100">
          <div className="relative h-64 w-full md:h-80">
            <Image
              src={restaurant.img}
              alt={restaurant.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            />
          </div>

          <div className="space-y-8 p-6 md:p-10">
            <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                  {restaurant.cuisine}
                </p>
                <div>
                  <h1 className="text-3xl font-semibold text-gray-900">
                    {restaurant.name}
                  </h1>
                  <p className="text-sm text-gray-500">by {restaurant.chef}</p>
                </div>
                <p className="text-base text-gray-600">{restaurant.description}</p>

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
                  <span>{restaurant.location}</span>
                  <span>•</span>
                  <span>{restaurant.prepTime}</span>
                  <span>•</span>
                  <span>{restaurant.deliveryFee}</span>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-gray-50 px-6 py-4 text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Rating
                </p>
                <p className="mt-1 text-4xl font-semibold text-gray-900">
                  {restaurant.rating}
                </p>
                <p className="text-sm text-gray-500">Community score</p>
              </div>
            </header>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">Highlights</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {restaurant.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-600"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">Signature dishes</h2>
              <div className="mt-4 divide-y divide-gray-100">
                {restaurant.menu.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <p className="text-base font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {item.tag && (
                        <span className="rounded-full bg-gray-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
                          {item.tag}
                        </span>
                      )}
                      <span className="text-base font-semibold text-gray-900">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
