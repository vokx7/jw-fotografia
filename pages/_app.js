import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import "../styles/globals.css";
// Import the functions you need from the SDKs you need
import { useRouter } from "next/router";
import { database } from "../firebase";
import { child, get, ref, set } from "@firebase/database";

const updateDatabase = (path) => {
  if(process.env.NODE_ENV === 'production') {
    get(child(ref(database), path)).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        set(ref(database, path), data + 1)
      }
    });
  }
}

function MyApp({ Component, pageProps }) {
  const [isActive, setIsActive] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    window.onscroll = () => {
      if (window.scrollY > 300) {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }
    };
  }, []);

  const router = useRouter();
  useEffect(() => {
    updateDatabase(router.asPath.split('/')[2] || 'index');
    const handleRouteChange = (url) => {
      updateDatabase(url.split('/')[2] || 'index');
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, router.asPath]);

  return (
    <>
      <Script
        src="https://kit.fontawesome.com/53a1056ce5.js"
        crossOrigin="anonymous"
      ></Script>
      <div className={`background ${isActive ? "active" : ""}`}></div>
      <nav
        className={`navbar ${isActive ? "active" : ""} ${
          isNavbarScrolled ? "nav-active" : ""
        }`}
      >
        <div className="container">
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100064337490395"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/j.wasala.fotografia/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <button
            className={`toggle-btn ${isActive ? "change" : ""}`}
            onClick={() => setIsActive((prev) => !prev)}
          >
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
          </button>
          <ul className="navbar-list">
            <li>
              <Link
                href="/#home"
                scroll={false}
                onClick={() => setIsActive(false)}
              >
                Strona główna
              </Link>
            </li>
            <li>
              <Link
                href="/#o-mnie"
                scroll={false}
                onClick={() => setIsActive(false)}
              >
                O mnie
              </Link>
            </li>
            <li>
              <Link
                href="/#oferta"
                scroll={false}
                onClick={() => setIsActive(false)}
              >
                Oferta
              </Link>
            </li>
            <li>
              <Link
                href="/#kontakt"
                scroll={false}
                onClick={() => setIsActive(false)}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Component {...pageProps} />
      <footer>
        <div>
          <p>&#169; Julia Wąsala | by Weronika Pawlak &#9829;</p>
        </div>
      </footer>
    </>
  );
}

export default MyApp;
