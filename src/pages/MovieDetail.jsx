import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const MovieDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const image_url = `https://image.tmdb.org/t/p/w500`;
  console.log(state);
  return (
    <div className="flex justify-center mt-20 ">
      <div className="items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="w-[300px] rounded-t-lg mx-auto md:rounded-none md:rounded-l-lg mt-4 "
          src={image_url + state?.backdrop_path}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="my-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {state.title}
          </h5>
          <p className="mb-3 font-bold text-lg text-gray-700 dark:text-gray-400 text-center">
            {state.overview}
          </p>
          <div className="flex justify-between my-5 mx-4">
            <p className="font-bold text-lg">{state.release_date}</p>
            <p
              className={`font-bold text-lg  text-white rounded-md ${
                state.vote_average <= 7
                  ? "bg-red-500 px-2 py-1 "
                  : "bg-orange-400 px-2 py-1 "
              }`}
            >
              {state.vote_average}
            </p>
          </div>
          <button onClick={() => navigate("/")} className="bg-slate-500 w-28 mx-auto py-2 px-2 font-bold text-lg  text-white rounded-md">Go Home</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
