import Link from "next/link";
import React from "react";
import Image from "next/image";

const MainSection = ({ title, desc, image }) => {
  return (
    <main className="flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-20  items-center  h-full">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl text-red-600 font-extrabold">{title}</h2>
        <p>{desc}</p>
        <div>
          <Link href="/movie">
            <button className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90 p-2 rounded-2xl   text-black">
              Explore Movies
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src={image}
          className="rounded-xl"
          width={600}
          height={600}
          alt="main"
        />
      </div>
    </main>
  );
};

export default MainSection;
