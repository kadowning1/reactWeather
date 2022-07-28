import { SetStateAction, useState } from "react";
// import Page from "../components/Page";
import Link from 'next/link';

export function Contact() {
  const [message, setMessage] = useState("");

  const handleInput = (e: { target: { value: SetStateAction<string>; }; }) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setMessage("");
  };

  return (

    <>

      <h1>This is the Contact page</h1><form onSubmit={handleSubmit}>
        <label>
          <span>Message:</span>
          <textarea onChange={handleInput} value={message} />
        </label>

        <button type="submit">submit</button>

        <Link href="/">
          <button type="button">back to home</button>
        </Link>
      </form>
    </>

  );
}