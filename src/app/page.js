import MainSection from "./components/MainSection";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white ">
      <MainSection
        title="LET'S GRAB YOUR SEAT AND WATCH MOVIE TOGETHER"
        desc="From award-winning drama to blockbuster action movies.we've got you
          covered.Browse our selection of the latest and greatest movies and
          find your new favorite today."
        image="/movie.avif"
      />
    </div>
  );
}
