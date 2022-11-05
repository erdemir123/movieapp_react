import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

export const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(false);
  const values = { user, setUser, query, setQuery, dark, setDark };
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

export const UseLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;
