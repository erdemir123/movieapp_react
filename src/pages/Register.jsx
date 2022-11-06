import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../auth/firebase";
import Navbar from "../components/Navbar";

const Register = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({ email: "", password: "", name:""});
  const createUserRegister = (e) => {
    e.preventDefault()
    const displayName = register.name
    const email = register.email
    const password = register.password
    createUser(email, password,navigate,displayName);
    console.log(email, password, displayName);
  };
  return (
    <div>
      <Navbar />
      <img src="https://i.pinimg.com/originals/8c/10/f1/8c10f1a675f4172aa88332f6c4b1ac9e.gif" alt="" className=" w-80 mx-auto mt-36"/>
      <div className="flex flex-col justify-center items-center  p-6 rounded-lg  w-full mt-[20px] ">
        <div className="flex flex-col justify-center  p-6 rounded-lg max-w-sm  border-2 w-full">
          <form>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputName2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputName2"
                value={register.name}
                onChange={(e) =>
                  setRegister({ ...register, name: e.target.value })
                }
                aria-describedby="emailHelp"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail2"
                value={register.email}
                onChange={(e) =>
                  setRegister({ ...register, email: e.target.value })
                }
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputPassword2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                value={register.password}
                onChange={(e) =>
                  setRegister({ ...register, password: e.target.value })
                }
                className="block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
              onClick={createUserRegister}
            >
              Create User
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Register;
