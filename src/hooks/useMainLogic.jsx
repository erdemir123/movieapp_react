import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api_key, base_url } from "../constants/API";
import { UseLoginContext } from "../context/LoginProvider";

const useMainLogic = () => {
  const [card, setCard] = useState([]);
  const navigate = useNavigate();
  const { user, setUser, query, setQuery, dark, setDark } = UseLoginContext();

  const search_url = base_url + `/search/movie?` + api_key + `&query=` + query;

  const handleSearch = () => {
    if (user.email && user.password) {
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

  const api_url =
    base_url +
    `/discover/movie?language=en-TR&sort_by=popularity.desc&` +
    api_key;

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
    user,
    query,
    setQuery,
    dark,
    setDark,
    api_url,
  };
};

export default useMainLogic;
