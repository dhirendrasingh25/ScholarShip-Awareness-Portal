import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault(); 
    axios
      .post('http://localhost:8080/login', {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Handle your form submission logic here
  };

  return (
    <>
      <div className='w-1/2 h-screen'>
        <div>
          <div>
            <img alt='Logo' className=''></img>
          </div>
          <div className='ml-24 mt-6 w-24 italic text-2xl'>Scholarmate</div>
        </div>
        <div className='flex justify-center'>
          <div className='mt-32 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <h5 className='text-xl font-medium text-gray-900 dark:text-white'>Log in to our platform</h5>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Your email
                </label>
                <input
                  value={email}
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='name@company.com'
                  onChange={handleEmail}
                  required
                />
              </div>
              <div>
                <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Your password
                </label>
                <input
                  value={password}
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  onChange={handlePassword}
                  required
                />
              </div>
              <div className='flex items-start'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='remember'
                      type='checkbox'
                      value=''
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                      required
                    />
                  </div>
                  <label htmlFor='remember' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                    Remember me
                  </label>
                </div>
                <a href='#' className='ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500'>
                  Lost Password?
                </a>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                onClick={handleApi}
              >
                Login to your account
              </button>
              <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
                Not registered?{' '}
                <a href='../Signup/Signup.jsx' className='text-blue-700 hover:underline dark:text-blue-500'>
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='w-1/2 h-screen rounded-l-lg shadow-2xl border-8 border-solid'>
        <div>
          <img src='' alt='Image'></img>
        </div>
      </div>
    </>
  );
};

export default Login;
