"use client";

import React, { useMemo, useState } from "react";

type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
  img?: string;
  notes?: string;
};

const initialCart: CartItem[] = [
  {
    id: "burger-1",
    title: "Classic Cheeseburger",
    price: 12.99,
    qty: 1,
    img: "/images/cheeseburger.jpg",
  },
  {
    id: "salad-1",
    title: "Caesar Salad",
    price: 9.99,
    qty: 1,
    img: "/images/caesar-salad.jpg",
  },
  {
    id: "fries-1",
    title: "French Fries",
    price: 4.99,
    qty: 1,
    img: "/images/fries.jpg",
  },
];

function formatPrice(n: number) {
  return `$${n.toFixed(2)}`;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);
  const [promo, setPromo] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const subtotal = useMemo(
    () => cartItems.reduce((s, it) => s + it.price * it.qty, 0),
    [cartItems]
  );

  const promoDiscount = useMemo(() => {
    if (appliedPromo === "HALF5") return Math.min(5, subtotal * 0.5);
    if (appliedPromo === "5OFF") return 5;
    return 0;
  }, [appliedPromo, subtotal]);

  const deliveryFee = subtotal > 25 ? 0 : 3.99;
  const tax = +(0.066 * subtotal).toFixed(2);
  const total = +(subtotal + deliveryFee + tax - promoDiscount).toFixed(2);

  function changeQty(id: string, delta: number) {
    setCartItems((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, qty: Math.max(0, it.qty + delta) } : it))
        .filter((it) => it.qty > 0)
    );
  }

  function removeItem(id: string) {
    setCartItems((prev) => prev.filter((it) => it.id !== id));
  }

  function applyPromo() {
    const code = promo.trim().toUpperCase();
    if (!code) return;
    if (code === "HALF5" || code === "5OFF") {
      setAppliedPromo(code);
    } else {
      setAppliedPromo(null);
      alert("Promo code not recognized (demo). Try HALF5 or 5OFF.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold text-black">Your Order</h2>

            <div className="mt-6 divide-y">
              {cartItems.length === 0 ? (
                <p className="py-8 text-center text-gray-500">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="py-4 flex items-center gap-4 text-black">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.img ?? "/images/placeholder.png"}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-gray-500">{formatPrice(item.price)}</p>
                        </div>

                        <div className="text-right text-sm">
                          <div className="text-gray-800 font-medium">
                            {formatPrice(item.price * item.qty)}
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="mt-2 text-xs text-gray-400 hover:text-gray-600"
                            aria-label={`Remove ${item.title}`}
                          >
                            🗑
                          </button>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-2">
                        <button
                          onClick={() => changeQty(item.id, -1)}
                          className="w-9 h-9 rounded-md border bg-white flex items-center justify-center"
                          aria-label="decrease"
                        >
                          −
                        </button>
                        <div className="px-3">{item.qty}</div>
                        <button
                          onClick={() => changeQty(item.id, +1)}
                          className="w-9 h-9 rounded-md border bg-white flex items-center justify-center"
                          aria-label="increase"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg mb-4 text-black">Delivery Address</h3>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-gray-700">First Name</span>
                <input className="mt-1 block w-full rounded-md border px-3 py-2" defaultValue="John" />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Last Name</span>
                <input className="mt-1 block w-full rounded-md border px-3 py-2" defaultValue="Doe" />
              </label>

              <label className="block md:col-span-2">
                <span className="text-sm font-medium text-gray-700">Street Address</span>
                <input
                  className="mt-1 block w-full rounded-md border px-3 py-2"
                  defaultValue="123 Main Street"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">City</span>
                <input className="mt-1 block w-full rounded-md border px-3 py-2" defaultValue="Anytown" />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-gray-700">Postal / ZIP</span>
                <input className="mt-1 block w-full rounded-md border px-3 py-2" defaultValue="A1B 2C3" />
              </label>
            </form>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold text-lg text-black">Order Summary</h3>

            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>{formatPrice(deliveryFee)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>{formatPrice(tax)}</span>
              </div>

              {promoDiscount > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>Promo ({appliedPromo})</span>
                  <span>-{formatPrice(promoDiscount)}</span>
                </div>
              )}

              <div className="mt-3 border-t pt-3 flex justify-between items-center">
                <div className="text-lg font-semibold">Total</div>
                <div className="text-xl font-bold text-orange-500">{formatPrice(total)}</div>
              </div>
            </div>

            <div className="mt-4">
              <label className="sr-only" htmlFor="promo">Promo</label>
              <div className="flex gap-2">
                <input
                  id="promo"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  placeholder="Enter code"
                  className="flex-1 rounded-md border px-3 py-2"
                />
                <button
                  onClick={applyPromo}
                  type="button"
                  className="px-4 py-2 rounded-md bg-white border hover:bg-gray-50"
                >
                  Apply
                </button>
              </div>
            </div>

            <button
              className="mt-6 w-full rounded-md bg-orange-500 text-white py-3 font-semibold shadow hover:opacity-95"
              onClick={() => alert("Place order clicked (demo)")}
            >
              Place Order
            </button>

            <p className="mt-2 text-xs text-gray-400">
              By placing an order, you agree to our Terms & Conditions
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-4">
            <h4 className="font-semibold">Need help?</h4>
            <p className="text-sm text-gray-500 mt-2">Contact support or check FAQ.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
