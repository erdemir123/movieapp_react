import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api_key, api_url, base_url } from "../constants/API";
import { UseLoginContext } from "../context/LoginProvider";


const useMainLogic = () => {
  const [card, setCard] = useState([]);
  const navigate = useNavigate();
  const { loginUser, setloginUser, query, setQuery, dark, setDark } =
    UseLoginContext();
  // const api_key = `api_key=0924e6736c5942a0471ffc6954cb4ed2`;
  // const base_url = `https://api.themoviedb.org/3`;
  const search_url = base_url + `/search/movie?` + api_key + `&query=` + query;
  ;
  const handleSearch = () => {
    if (loginUser.email && loginUser.password) {
      setQuery("");
      fetch(search_url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("something went everthing");
          }
          return res.json();
        })
        .then((data) => setCard(data?.results))
        .catch((err) => console.log(err));
    } else {
      alert("Lütfen Giriş Yapınız");
      navigate("/login");
    }
  };
 
  useEffect(() => {
    fetch(api_url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("something went everthing");
        }
        return res.json();
      })
      .then((data) => setCard(data?.results))
      .catch((err) => console.log(err));
  }, []);

  return {
    handleSearch,
    card,
    setCard,
    loginUser,
    setloginUser,
    query,
    setQuery,
    dark,
    setDark,
  };
};

export default useMainLogic;
