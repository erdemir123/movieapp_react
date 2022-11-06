import React from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { UseLoginContext } from "../context/LoginProvider";
import Unknown from "../helper/images/unknown.jpg"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Navbar = () => {
  const { currentUser, dark } = UseLoginContext();
  const navigate = useNavigate();
  return (
    <div>
      <nav
        className={`${
          dark ? "bg-black text-white" : "bg-white"
        } px-2 sm:px-4 py-2.5 rounded border-b-2 border-slate-500 shadow-slate-600 shadow-sm fixed w-full top-0 z-50`}
      >
        <div className="container flex  justify-between items-center mx-auto ">
          <div className="flex justify-center items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Movie App
            </span>
          </div>
          <div className="w-auto mb-2" id="navbar-default">
            <ul className="flex gap-4 p-4 mt-4 bg-gray-200 rounded-lg  text-gray-500 font-bold ">
              {currentUser ? (
                <div className="flex gap-4 items-center">
                  <img
                    src={currentUser?.photoURL ? currentUser?.photoURL : Unknown}
                    alt=""
                    className="w-8 rounded-full"
                  />
                  <h5 className="bg-slate-400 py-1 px-2 rounded-md text-white active:scale-95">
                    {currentUser?.displayName ? currentUser?.displayName :"user"}
                  </h5>
                  <button
                    onClick={logOut}
                    className="bg-slate-400 py-1 px-2 rounded-md text-white active:scale-95"
                  >
                    LogOut
                  </button>
                </div>
              ) : (<div className="flex gap-4 items-center">
                  <button
                    onClick={()=>navigate("/login")}
                    className="bg-slate-400 py-1 px-2 rounded-md text-white active:scale-95"
                  >
                    Login
                  </button>
                  <button
                    onClick={()=>navigate("/register")}
                    className="bg-slate-400 py-1 px-2 rounded-md text-white active:scale-95"
                  >
                    Register
                  </button>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
