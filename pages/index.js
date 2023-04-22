import { useState, useEffect } from 'react';

import Head from 'next/head';
import styles from '../styles/Home.module.css';

import firebase from '../lib/firebase';
import "firebase/database"; // for Realtime Database

import { NavBar } from '../src/components/Navbar';
import Slider from '../src/components/Slider';


export default function Home() {

  const [isNavbarTransparent, setNavbarTransparent] = useState(false);

  useEffect(() => {
    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Set the threshold scroll position for making the navbar transparent
    const threshold = 100;

    // Update state to determine if navbar should be transparent or not
    if (scrollPosition > threshold) {
      setNavbarTransparent(true);
    } else {
      setNavbarTransparent(false);
    }
  };

  // Read data from Realtime Database
  const fetchData = async () => {
    const snapshot = await firebase.database().ref("/path/to/data").once("value");
    const data = snapshot.val();
    console.log('firebase data ', data);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>VisitFL</title>
        <link 
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      
      <main className={isNavbarTransparent ? 'navbar-transparent' : 'navbar-opaque'}>
        <NavBar />
        <h1>Visit Florida</h1>
        <h2>It's nice</h2>
        <Slider />        
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        nav {
          width: 100%;
        }
        .navbar-transparent {
          background-color: blue;
          transition: 1.3s;
        }
        .navbar-opaque {
          background-color: none;
          transition: 0.5s;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
