import React from "react";
import Image from "next/image";
const Movie = async ({ params }) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e8903a4eb2mshfb9a42f6badf559p1f6579jsn80d161e3ee8b",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <div className="px-60 p-10 ">
      <p className="text-xl mb-2 text-bold">
        Movieflix \
        <span className="text-capatilize text-rose-400">{main_data.type}</span>
      </p>
      <div>
        <Image
          src={main_data.backgroundImage.url}
          className="rounded-lg"
          alt={main_data.title}
          width={600}
          height={300}
        />
      </div>
      <div>
        <h1 className="text-3xl text-bold font-serif mt-10">
          {main_data.title}
        </h1>
        <p className="mt-4">{main_data.synopsis}</p>
      </div>
    </div>
  );
};

export default Movie;
