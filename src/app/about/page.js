import React from "react";
import MainSection from "../components/MainSection";

const Page = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <MainSection
        title="Our Story"
        desc=" Welcome to MovieBuzz! We are a team of movie enthusiasts dedicated to
providing you with the latest and greatest films from around the
world. Our mission is to help you discover new and exciting movies
that will entertain, inspire, and captivate you. We understand that
there are countless movie options out there, which is why we have
carefully curated our collection to include only the best movies
across all genres. From heartwarming comedies to spine-tingling
thrillers, we've got you covered. At MovieFlix, we are committed to
making your movie watching experience as smooth and enjoyable as
possible."
        image={"/about.avif"}
      />
    </div>
  );
};

export default Page;
