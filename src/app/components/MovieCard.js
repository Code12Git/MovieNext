import React from "react";
import Image from "next/image";
import Link from "next/link";
const MovieCard = (element) => {
  const { id, title, synopsis } = element.jawSummary;
  return (
    <>
      <Link href={`/movie/${id}`}>
        <div className="rounded overflow-hidden shadow-lg max-w-sm transition duration-300 ease-in-out transform hover:ease-in hover:-translate-y-1 hover:shadow-2xl cursor-pointer my-4 ">
          <Image
            src={element.jawSummary.backgroundImage.url}
            alt="Image"
            height={80}
            width={1000}
            className="w-full"
          />
          <div className=" p-5">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p>{synopsis.substring(0, 70)}...</p>
          </div>
          <div className="mx-28 p-4">
            <Link href={`/movie/${id}`}>
              <button className="bg-slate-300 hover:bg-slate-400 p-2 rounded-full w-32">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
