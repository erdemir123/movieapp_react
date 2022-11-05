import React from "react";
import { useNavigate } from "react-router-dom";
import { UseLoginContext } from "../context/LoginProvider";
import LoginImages from "../images/images.jpg";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser, setQuery, dark, setDark } = UseLoginContext();
  console.log(user.password);
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
    setQuery("");
  };
  return (
    <div
      className={
        dark ? "h-[100vh] lg:flex bg-black " : "h-[100vh] lg:flex bg-gray-200 "
      }
    >
      <div className="lg:w-[50%] pt-10">
        <img
          src={LoginImages}
          alt="loginImages"
          className="w-[90%] h-[400px] mx-auto lg:h-[90vh] border-2 border-gray-800 shadow-md shadow-gray-500 rounded-lg"
        />
      </div>

      <form className="mt-12 flex flex-col justify-center lg:w-[50%] lg:h-[400px] lg:mt-64 lg:mr-8 bg-gray-300 rounded-2xl shadow-lg shadow-white py-4 mx-8">
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
            value={user?.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
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
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div className="flex items-center justify-center mb-6 mx-auto">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              defaultValue
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300 "
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[100px] mx-auto sm:w-auto px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
      <button
        className={
          dark
            ? "fixed bottom-6 right-4 bg-gray-400 w-16 h-16 rounded-full text-black font-bold"
            : "fixed bottom-6 right-4 bg-gray-400 text-white w-16 h-16 rounded-full font-bold"
        }
        onClick={() => setDark(!dark)}
      >
        {dark ? "light" : "dark"}
      </button>
    </div>
  );
};

export default Login;
