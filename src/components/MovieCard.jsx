import React from "react";
import { useNavigate } from "react-router-dom";
import { UseLoginContext } from "../context/LoginProvider";
import Filmimages from "../helper/images/filmimages.jpg"

const MovieCard = ({ item }) => {
    const navigate=useNavigate()
  const image_url = `https://image.tmdb.org/t/p/w500`;
  const { currentUser,dark } = UseLoginContext();
  return (
    <div className={dark ? "w-[400px] h-[660px] group relative overflow-hidden border-2 border-white rounded-md shadow-sm shadow-white " : "w-[400px] h-[654npm px] group relative overflow-hidden shadow-sm shadow-black"} onClick={()=>navigate("moviedetails",{state:item})}>
      <img src={(!image_url + item?.poster_path) ? (image_url+item?.poster_path) : Filmimages } alt={item.overview} className="w-[400px] h-[600px]"/>
      <div className={dark ? "absolute bottom-0 left-[100%] group-hover:left-0 bg-black duration-[1000ms] w-full py-10 text-center px-2 font-bold text-gray-400 rounded-t-lg" : "absolute bottom-0 left-[100%] group-hover:left-0 bg-gray-50 duration-[1000ms] w-full py-10 text-center px-2 font-bold text-gray-400 rounded-t-lg"}>
        <p>Overview</p>
        {item?.overview}
      </div>
      { (currentUser) ? (
        <div className="bg-gray-400 py-4 text-left flex justify-between px-2 items-center">
          <p className="text-white font-bold text-md">{item?.title}</p>
          <div
            className={
              item.vote_average <= 7
                ? "bg-red-500 px-2 py-1 text-white font-bold rounded-md "
                : "bg-orange-400 px-2 py-1  text-white font-bold rounded-md "
            }
          >
            {item?.vote_average}
          </div>
        </div>
      ) : (
        <div className="bg-gray-400 py-4 text-left flex justify-between px-2 items-center">
          <p className="text-white font-bold text-md">{item?.title}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
