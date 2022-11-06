import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { userObserver } from "../auth/firebase"

export const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("")
  const [loginUser, setloginUser] = useState({ email: "", password: "" });
  useEffect(() => {
    userObserver(setCurrentUser);
  }, [])
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(false);
  const values = { loginUser, setloginUser, query, setQuery, dark, setDark,currentUser };
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

export const UseLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;
