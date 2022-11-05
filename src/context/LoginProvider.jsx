import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

export const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const [loginUser, setloginUser] = useState({ email: "", password: "" });
  const [register, setRegister] = useState({ email: "", password: "",name:""});
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(false);
  const values = { loginUser, setloginUser, query, setQuery, dark, setDark,register,setRegister };
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

export const UseLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;
