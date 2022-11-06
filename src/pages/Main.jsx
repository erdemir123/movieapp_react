import React from "react";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import useMainLogic from "../hooks/useMainLogic";

const Main = () => {
  const { handleSearch, card, dark, query, setQuery, setDark } = useMainLogic();

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
      <btn
        className="fixed bottom-[10px] right-4 bg-slate-200 w-20 h-16 rounded-md text-white font-bold z-50 group"
        onClick={() => setDark(!dark)}
      >
        <div className="bg-black w-[90%] h-[30px] mx-auto line-through mt-2 rounded-2xl flex items-center ">
          <span
            className={ `  w-5 h-[20px] bg-white rounded-full duration-500 ${dark && "translate-x-12" }`
            }
          ></span>
        </div>
        <div className="text-center mb-2 text-slate-500">
          {dark ? (
            <svg width="5em" height="1.5em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49z"
                opacity=".3"
              ></path>
              <path
                fill="currentColor"
                d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
              ></path>
            </svg>
          ) : (
            <svg width="5em" height="1.5em" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"
              ></path>
            </svg>
          )}
        </div>
      </btn>
    </div>
  );
};

export default Main;
