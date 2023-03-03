import Head from "next/head";
import Image from "next/image";
import karuzela1 from "../assets/images/main/karuzela1.webp";
import karuzela2 from "../assets/images/main/karuzela2.webp";
import karuzela3 from "../assets/images/main/karuzela3.webp";
import omnie from "../assets/images/main/omnie1.webp";
import apartmain from "../assets/images/main/apartmain.webp";
import komuniamain from "../assets/images/main/komuniamain.webp";
import mamamain from "../assets/images/main/mamamain.webp";
import plenermain from "../assets/images/main/plenermain.webp";
import portfoliomain from "../assets/images/main/portfoliomain.webp";
import zakochanimain from "../assets/images/main/zakochanimain.webp";
import rodzinamain from "../assets/images/main/rodzinamain.webp";
import dzieci from "../assets/images/main/dziecimain.webp";
import kontakt from "../assets/images/main/kontakt.webp";
import ogimage from "../images/jwf.png";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Julia Wąsala Fotografia</title>
        <meta
          name="description"
          content="Fotografia Kępno i okolice, zmysłowo, rodzinnie, tak jak lubisz. Portfolio Julia Wąsala. Sesja dziecięca, rodzinna, kobieca, portfolio dla firm. "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="jw-fotografia.vercel.app" />
        <meta
          property="og:description"
          content="Fotografia Kępno i okolice, zmysłowo, rodzinnie, tak jak lubisz. Portfolio Julia Wąsala. Sesja dziecięca, rodzinna, kobieca, portfolio dla firm."
        />
        <meta property="og:title" content="Julia Wąsala Fotografia" />
        <meta name="image" property="og:image" content={ogimage} />
        <meta name="robots" content="follow, index" />
      </Head>
      <main>
        <section id="home">
          <div className="carousel-container">
            <div className="shadow"></div>
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              transitionTime={500}
              showThumbs={false}
            >
              <div>
                <Image src={karuzela1} alt="car" placeholder="blur" />
              </div>
              <div>
                <Image src={karuzela2} alt="car" placeholder="blur" />
              </div>
              <div>
                <Image src={karuzela3} alt="car" placeholder="blur" />
              </div>
            </Carousel>
          </div>
          <div className="container">
            <h1>
              <span>Julia Wąsala</span> <br />
              Fotografia
            </h1>
            <h2>Zamknięte w kadrze.</h2>
            <div className="btn-home">
              <a href="#oferta" className="btn btn-primary">
                Oferta
              </a>
              <a href="#kontakt" className="btn btn-secondary">
                Kontakt
              </a>
            </div>
          </div>
        </section>
        <section id="o-mnie">
          <div className="container">
            <div className="wrapper">
              <p>
                Nagle dostrzegam, że wszystko dookoła jest fascynujące, ale
                dopiero na fotografii.
                <br /> Poczuj to ze mną!
              </p>
            </div>
            <div className="wrapper-flex">
              <div className="omnie-car">
                <Image src={omnie} alt="me" />
              </div>
              <div className="opis">
                <h2>Kilka słów o mnie</h2>
                <h3>Subtelnie, zmysłowo, tak jak chcesz…</h3>
                <p>
                  Nazywam się Julia, fotografią zajmuje się już ponad dwa lata.
                  Oprócz tego uwielbiam podróże, a najbardziej wycieczki w góry.
                  Uczę się sama, uczę się dzieki Wam. Przeszłam dwa
                  profesjonalne szkolenia fotograficzne. Startuję w różnych
                  konkursach, mam już na swoim koncie kilka miejsc na podium
                  oraz liczne wyróżnienia w tej dziedzinie. <br /> <br />
                  Wykonałam dla Was mnóstwo sesji oraz zleceń. To one dają mi
                  motywację i moc do działania. Staram się cały czas być{" "}
                  <q>na czasie</q> z fotografią, ponieważ i ona często zmienia
                  swoje trendy. Jestem osobą otwartą na Wasze propozycje, do
                  każdego z Was podchodzę bardzo indywidualnie. Komunikacja i
                  kontakt z Wami odgrywają dla mnie wielkie znaczenie. A sam
                  kontakt z ludźmi to wielka przyjemność.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="oferta">
          <div className="container">
            <div className="album-name">
              <h2>Albumy</h2>
              <p>Zamknięte w kadrze.</p>
            </div>
            <div className="albums">
              <Link className="album" href="/albumy/sesja-dziecieca">
                <Image src={dzieci} alt="kids" placeholder="blur" />
                <div>
                  <p>Sesja dziecięca</p>
                </div>
              </Link>
              <Link className="album" href="/albumy/komunia-chrzest-roczek">
                <Image src={komuniamain} alt="kids" placeholder="blur" />
                <div>
                  <p>Komunia, Chrzest, Roczek</p>
                </div>
              </Link>
              <Link className="album" href="/albumy/sesja-rodzinna">
                <Image src={rodzinamain} alt="kids" placeholder="blur" />
                <div>
                  <p>Sesja rodzinna</p>
                </div>
              </Link>
              <Link className="album" href="/albumy/sesja-przyszla-mama">
                <Image src={mamamain} alt="kids" placeholder="blur" />
                <div>
                  <p>Sesja przyszłej mamy</p>
                </div>
              </Link>
              <Link className="album" href="/albumy/sesja-zakochanych">
                <Image src={zakochanimain} alt="kids" placeholder="blur" />
                <div>
                  <p>Sesja zakochanych</p>
                </div>
              </Link>

              <Link className="album" href="/albumy/sesja-kobieca-w-plenerze">
                <Image src={plenermain} alt="kids" placeholder="blur" />
                <div>
                  <p>Sesja kobieca w plenerze</p>
                </div>
              </Link>
              <Link
                className="album"
                href="/albumy/sesja-kobieca-w-apartamencie"
              >
                <Image src={apartmain} alt="kids" placeholder="blur" />
                <div>
                  <p>Sesja kobieca w apartamencie</p>
                </div>
              </Link>
              <Link className="album" href="/albumy/portfolio-dla-firm">
                <Image src={portfoliomain} alt="kids" placeholder="blur" />
                <div>
                  <p>Portfolio dla firm</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section id="kontakt">
          <div className="contact-wrapper container">
            <div className="icons-wrapper">
              <h2>
                Wyobraź sobie zdjęcie idealne <br />I napisz do mnie…
              </h2>
              <a href="tel:733300603">
                <i className="fa-solid fa-phone"></i> Telefon: 733 300 603
              </a>
              <a href="mailto:wasalajulia4@gmail.com">
                <i className="fa-solid fa-envelope"></i> E-mail:
                wasalajulia4@gmail.com
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100064337490395"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i> Facebook
              </a>
              <a
                href="https://www.instagram.com/j.wasala.fotografia/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i> Instagram
              </a>
            </div>
            <div className="contact-img">
              <Image src={kontakt} alt="Photo by Foto.Emocjonalni" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
