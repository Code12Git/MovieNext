import React from "react";

import MovieCard from "../components/MovieCard";

const Page = async () => {
  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e8903a4eb2mshfb9a42f6badf559p1f6579jsn80d161e3ee8b",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const main_data = result.titles;

  return (
    <>
      <section className="">
        <div>
          <h1 className="text-2xl text-gray-600 text-center font-semibold mt-3 ">
            Series & Movie{" "}
          </h1>
          <div className="grid grid-flow-row md:grid-cols-2 md:gap-3 lg:grid-cols-3 p-9">
            {main_data.map((element) => {
              return <MovieCard key={element.id} {...element} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Page;
