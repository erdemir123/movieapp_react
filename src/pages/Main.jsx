import React from "react";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import useMainLogic from "../hooks/useMainLogic";

const Main = () => {
  const { handleSearch, card, dark, query,setQuery, setDark } =
    useMainLogic();

  return (
    <div className="z-50 relative">
      <Navbar />
      <div className="mt-[105px] bg-gray-300 py-5 flex justify-center ">
        <input
          type="text"
          value={query}
          className="rounded-md border-none outline-none w-80"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-gray-400 text-white ml-2 px-2 rounded-md font-bold active:bg-gray-200 active:text-black active:scale-95"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div
        className={
          dark
            ? "flex flex-wrap gap-10 justify-center items-center py-4 bg-black"
            : "flex flex-wrap gap-10 justify-center items-center py-4 bg-white"
        }
      >
        {card.map((item, index) => {
          return <MovieCard item={item} key={index} />;
        })}
      </div>
      <button
        className={
          dark
            ? "fixed bottom-6 right-4 bg-gray-400 w-16 h-16 rounded-full text-white font-bold"
            : "fixed bottom-6 right-4 bg-gray-400 w-16 h-16 rounded-full font-bold text-black"
        }
        onClick={() => setDark(!dark)}
      >
        {dark ? "light" : "dark"}
      </button>
    </div>
  );
};

export default Main;
