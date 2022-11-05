import React from "react";
import { Link } from "react-router-dom";
import { UseLoginContext } from "../context/LoginProvider";
const Navbar = () => {
  // const navigate = useNavigate()
  const { user, setUser, dark } = UseLoginContext();
  return (
    <div>
      <nav
        className={`${
          dark ? "bg-black text-white" : "bg-white"
        } hidden sm:flex  px-2 sm:px-4 py-2.5 rounded border-b-2 border-slate-500 shadow-slate-600 shadow-sm fixed w-full top-0 z-50`}
      >
        <div className="container flex  justify-between items-center mx-auto ">
          <div className="flex justify-center items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-8 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Movie React App
            </span>
          </div>
          <div className="w-auto mb-2" id="navbar-default">
            <ul className="flex gap-4 p-4 mt-4 bg-gray-200 rounded-lg  text-gray-500 font-bold ">
              {!user.email || !user.password ? (
                <Link className="hover:text-gray-400" to="/login">
                  Login
                </Link>
              ) : (
                <Link
                  className="hover:text-gray-400"
                  to="/"
                  onClick={() => setUser({ email: "", password: "" })}
                >
                  LogOut
                </Link>
              )}
              <Link className="hover:text-gray-400" to="/register">
                Register
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
