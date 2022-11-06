import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api_key, api_url, base_url } from "../constants/API";
import { UseLoginContext } from "../context/LoginProvider";

const useMainLogic = () => {
  const [card, setCard] = useState([]);
  const Swal = require("sweetalert2");
  const navigate = useNavigate();
  const {
    loginUser,
    setloginUser,
    query,
    setQuery,
    dark,
    setDark,
    currentUser,
  } = UseLoginContext();
  const search_url = base_url + `/search/movie?` + api_key + `&query=` + query;
  const handleSearch = () => {
    if (currentUser) {
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
      Swal.fire({
        title: "Film Detaylarını Görebilmek İçin",
        text: "Lütfen Giriş Yapınız",
        icon: "info",
        confirmButtonText: "Kapat",
      });
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
