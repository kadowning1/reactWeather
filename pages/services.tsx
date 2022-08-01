import React from 'react'

import { useState } from 'react';
import { form_event } from '../lib/ga';

import Link from 'next/link';

export const Services = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const analytics = (
  ) => {
    form_event('form-submit', userName);
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(userName + " was submitted");
    // analytics();
    setUserName("");
    setUserPassword("");
  };
  return (
    <div className='justify-center m-7'>
      <div>
        <div className='text-2xl pb-2'>
          Services
        </div>
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input onChange={(e) => setUserName(e.target.value)} value={userName} className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input onChange={(e) => setUserPassword(e.target.value)} value={userPassword} className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" />
            </div>
            <Link href='/'>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>
            </Link>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Services;
