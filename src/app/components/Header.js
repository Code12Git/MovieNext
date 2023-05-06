import React from "react";

import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <header className=" body-font  font-sans bg-slate-700">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/movie1.avif"
              width={60}
              height={60}
              alt="movie"
              className="rounded-full"
            />
            <span className="ml-3 text-2xl font-sans transition duration-300 ease-in-out transform hover:ease-in hover:-translate-y-1 hover:shadow-2xl  bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
              MovieBuzz
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href="/"
              className="mr-5 bg-gradient-to-r text-xl transition duration-300 ease-in-out transform hover:ease-in hover:-translate-y-1 hover:shadow-2xl  from-red-400 to-green-500 bg-clip-text text-transparent hover:text-blue-300  cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="mr-5 transition duration-300 ease-in-out transform hover:ease-in hover:-translate-y-1 hover:shadow-2xl  bg-gradient-to-r text-xl from-red-400 to-green-500 bg-clip-text text-transparent hover:text-blue-300 cursor-pointer"
            >
              AboutUs
            </Link>
            <Link
              href="/movie"
              className="mr-5 bg-gradient-to-r transition duration-300 ease-in-out transform hover:ease-in hover:-translate-y-1 hover:shadow-2xl text-xl from-red-400 to-green-500 bg-clip-text text-transparent hover:text-blue-300 cursor-pointer"
            >
              Movie
            </Link>
            <Link
              href="/contact"
              className="mr-5 bg-gradient-to-r text-xl transition duration-300 ease-in-out transform hover:ease-in hover:-translate-y-1 hover:shadow-2xl  from-red-400 to-green-500 bg-clip-text text-transparent hover:text-blue-300 cursor-pointer"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
