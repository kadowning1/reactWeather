import { useState } from 'react'
import { event } from "nextjs-google-analytics";


import * as ga from '../lib/ga'
import Link from 'next/link';

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
      <>
        <h1>This is the Contact page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Message:</span>
            <textarea onChange={handleInput} value={message} />
          </label>
          <Link href={'/'}>
            <button type="submit">submit</button>
          </Link>
          
        </form>
      </>
    );
}

export default Contact;
