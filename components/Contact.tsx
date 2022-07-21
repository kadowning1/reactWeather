import { SetStateAction, useState } from "react";
// import Page from "../components/Page";
import { event } from "nextjs-google-analytics";

export function Contact() {
  const [message, setMessage] = useState("");

  const handleInput = (e: { target: { value: SetStateAction<string>; }; }) => {
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

      <h1>This is the Contact page</h1><form onSubmit={handleSubmit}>
        <label>
          <span>Message:</span>
          <textarea onChange={handleInput} value={message} />
        </label>
        <button type="submit">submit</button>
      </form>
    </>

  );
}