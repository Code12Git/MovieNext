import React from "react";

import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className="p-4 bg-slate-300 flex items-center justify-around shadow-lg z-1">
        <div className="flex text-center">
          <div className="flex items-center">
            <Image
              src="/movie.avif"
              height={100}
              width={60}
              className="rounded-xl"
            />
            <h1 className="text-2xl font-serif bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">
              MovieFlix
            </h1>
          </div>
        </div>
        <div className="flex gap-3">
          <Link
            href="/"
            className="text-lg bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            About
          </Link>
          <Link
            href="/movie"
            className="text-lg bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            Movie
          </Link>
          <Link
            href="/contact"
            className="text-lg bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            Contact
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
