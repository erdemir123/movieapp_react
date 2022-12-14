import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseLoginContext } from "../context/LoginProvider";
import { signIn, signUpProvider } from "../auth/firebase";
import LoginImages from "../helper/images/images.jpg"

const Login = () => {
  const navigate = useNavigate();
  const { loginUser, setloginUser, dark} =
    UseLoginContext();
  const handleClick = (e) => {
    e.preventDefault();
    signIn(loginUser.email, loginUser.password, navigate);
  };
  const handleLogin=()=>{
    signUpProvider(navigate)
  }
  return (
    <div
      className={
        dark ? "h-[100vh] md:flex bg-black items-center relative" : "h-[100vh] md:flex bg-gray-200 items-center relative"
      }
    >
<img src={LoginImages} className="w-[90%] h-[350px] mx-auto rounded-md pt-2 shadow-md shadow-gray-600 md:w-[50%] md:h-[80vh] md:ml-4" alt="resim"></img>
      <form className="mt-12 flex flex-col justify-center md:w-[50%] md:h-[400px] md:mt-32 md:mr-8 bg-gray-300 rounded-2xl shadow-lg shadow-white py-4 mx-8">
        <div className="mb-6 w-full px-20 ">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@gmail.com"
            required
            value={loginUser?.email}
            onChange={(e) =>
              setloginUser({ ...loginUser, email: e.target.value })
            }
          />
        </div>

        <div className="mb-6 w-full px-20">
          <label
            htmlFor="password"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={loginUser.password}
            onChange={(e) =>
              setloginUser({ ...loginUser, password: e.target.value })
            }
          />
        </div>
        <div className="flex items-center justify-center mb-6 mx-auto">
          <p
            htmlFor="remember"
            className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300 "
          >
            Not a member?
            <Link to="/register" className="text-slate-500">
              REG??STER
            </Link>
          </p>
        </div>
        <div
          type="submit"
          className="text-white bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[280px] mx-auto sm:w-auto px-14 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4"
          onClick={handleLogin}
        >
          SIGN IN W??TH GOOGLE
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[100px] mx-auto sm:w-auto px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleClick}
        
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
