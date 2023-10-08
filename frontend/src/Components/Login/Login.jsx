import React, { useState , useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);
//   const navigate = useNavigate()



import { Link, Navigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import Logo from "../../assets/Logo.jpeg"

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const id=sessionStorage.userId

  return (
    <>
      {id && <Navigate to="/" replace={true}></Navigate>}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
<div class='flex items-center justify-center pt-4'>
<img src={Logo} className=" my-3 mx-4 rounded-full h-12 w-12 "></img>
</div>
         
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            noValidate
            onSubmit={handleSubmit(async (data) => {
              try {
                const response = await axios.post("http://localhost:8080/login", {
                  email: data.email,
                  password: data.password,
                }, {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                });
            
                console.log('Login successful:', response.data);
                sessionStorage.setItem("userId", response.data.id);
                sessionStorage.setItem("hasLoggedIn", response.data.login);
              } catch (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  console.error('Server responded with an error:', error.response.data);
                  console.error('Status code:', error.response.status);
                } else if (error.request) {
                  // The request was made but no response was received
                  console.error('Request made but no response received:', error.request);
                } else {
                  // Something happened in setting up the request
                  console.error('Error setting up the request:', error.message);
                }
              }
            })}
            
            
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "email not valid",
                    },
                  })}
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link to="/forgot-password">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  {...register("password", {
                    required: "password is required",
                  })}
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              {errors  && <p className="text-red-500">{errors.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}