import { SetStateAction, useState } from "react";
// import Page from "../components/Page";
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { event_click } from '../lib/ga';

export function Contact() {
  const [message, setMessage] = useState("");

  const router = useRouter();

  // const handleRouteChange = (category: string,
  //   action: string,
  //   label: string,
  // ) => {
  //   event_click(category, action, label = 'header-click');
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }
  

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    console.log(message + " was submitted");
    // handleRouteChange('search', 'search-field', message);
    e.preventDefault();
    setMessage("");
  };
  return (

    <>

      <h1>This is the Contact page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Message:</span>
          <textarea onChange={(e) => setMessage(e.target.value)} value={message} />
        </label>

        <button type="submit">submit</button>

        <Link href="/">
          <button type="button">back to home</button>
        </Link>
      </form>
    </>

  );
}