import React from "react";

export default function Card() {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-xl dark:shadow-black/50 border border-zinc-100 dark:border-zinc-800 transition-all duration-500">

      {/* Image section */}
      <a href="/" className="block relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-zinc-800 dark:text-zinc-100 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700">
            New Arrival
          </span>
        </div>

        <img
          className="w-full h-64 object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Apple Watch Series 7"
        />
      </a>

      {/* Content */}
      <div className="px-6 pt-5 pb-6">

        {/* Category */}
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-2">
          Apple Watch · Series 7
        </p>

        {/* Title */}
        <a href="/">
          <h5
            className="text-lg font-bold text-zinc-900 dark:text-white leading-snug mb-4 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors duration-200"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Aluminium Case, Starlight Sport
          </h5>
        </a>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-5">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4].map((i) => (
              <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
            <svg className="w-3.5 h-3.5 text-zinc-200 dark:text-zinc-700" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">4.0</span>
          <span className="text-xs text-zinc-300 dark:text-zinc-600">·</span>
          <span className="text-xs text-zinc-400 dark:text-zinc-500">128 reviews</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-100 dark:bg-zinc-800 mb-5" />

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold mb-0.5">Price</p>
            <span
              className="text-2xl font-black text-zinc-900 dark:text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              $599
            </span>
          </div>
          <a
            href="/"
            className="group flex items-center gap-2 bg-zinc-900 dark:bg-white hover:bg-zinc-700 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-semibold text-xs uppercase tracking-widest px-5 py-3 rounded-2xl transition-all duration-300 shadow-lg shadow-zinc-900/20 dark:shadow-white/10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}