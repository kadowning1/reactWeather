import { useState } from 'react'
import { event } from "nextjs-google-analytics";


import * as ga from '../lib/ga'
import Link from 'next/link';
import Navbar from '../components/Navbar';

export const Contact = () => {
  const [message, setMessage] = useState("");

  const handleInput = (e: { target: { value: any; }; }) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    event("submit_form", {
      category: "Contact",
      label: message,
    });

    setMessage("");
  };

  return (
    <div className='bg-slate-400 dark:bg-slate-200'>
      <div>
        <Navbar />
      </div>
      <h1 className='text-center'>This is the Contact page</h1>
      <div className='flex flex-col items-center justify-center h-screen mb-3 xl:w-96'>
        <form onSubmit={handleSubmit} className=''>
          <label htmlFor="exampleFormControlInput1" className="form-label inline-block mb-2 text-gray-700"
          >Example label
          </label>
          <input
            type="text"
            onChange={handleInput} value={message}
            className="
        form-control
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlInput1"
            placeholder="Example label"
          />

          <Link href={'/'}>
            <button type="submit" className="  bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit} >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Contact;
