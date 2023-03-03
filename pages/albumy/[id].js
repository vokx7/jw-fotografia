import Head from "next/head";
import Image from "next/image";
import ogimage from "../../images/jwf.png";
import { apartament } from "../../images/apartament";
import { family } from "../../images/family";
import { firstyear } from "../../images/firstyear";
import { futuremother } from "../../images/futuremother";
import { kids } from "../../images/kids";
import { lovers } from "../../images/lovers";
import { openair } from "../../images/openair";
import { portfolio } from "../../images/portfolio";
import { useRouter } from "next/router";

export default function Albumy(props) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Julia Wąsala Fotografia</title>
        <meta name="description" content={props.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://jw-fotografia.vercel.app${router.asPath}`}
        />
        <meta property="og:description" content={props.description} />
        <meta property="og:title" content="Julia Wąsala Fotografia" />
        <meta name="image" property="og:image" content={ogimage} />
        <meta name="robots" content="follow, index" />
        <meta property="og:site_name" content={props.title} />
      </Head>
      <main style={{ paddingTop: "80px" }}>
        <section id="oferta">
          <div className="container">
            <div className="album-name">
              <h2>{props.title}</h2>
              <p>Subtelnie, zmysłowo, tak jak chcesz…</p>
              {props.description && (
                <p style={{ color: "#ddd", letterSpacing: "1.5px" }}>
                  {props.description}
                </p>
              )}
            </div>
            <div className="albums">
              {props.images.map((image, index) => (
                <div className="album no-hover" key={index}>
                  <Image
                    src={image}
                    alt="kids"
                    placeholder="blur"
                    className="no-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const daneGalerii = {
  "sesja-dziecieca": {
    title: "Sesja dziecięca",
    description:
      "Plener. Wyruszamy na spacer, zabieramy dzieci i razem ze mną idziemy do moich sprawdzonych miejsc, aby stworzyć im pamiątkę na całe życie. Sesja wykonywana wiosną, latem, jesienią oraz zimą. Możliwość sesji z kucykiem ze stajni 'Kubuś i Przyjaciele'. Świetny pomysł na prezent.",
    images: kids,
  },
  "komunia-chrzest-roczek": {
    title: "Komunia Chrzest Roczek",
    description:
      "Kościół, Restauracja, Plener. Pamiątka w postaci fotorelacji, bądź sesji w plenerze z najważniejszych momentów Waszego życia. Zapraszam po indywidualną wycenę.",
    images: firstyear,
  },
  "sesja-rodzinna": {
    title: "Sesja rodzinna",
    description:
      "Plener. Zabierz cała rodzinę na zdjęcia! Uzyskaj wspaniałą pamiątkę, która będzie mogła zostać ozdobą Waszego domu w postaci odbitek w ramce. Wspaniała przygoda tylko dla Was możliwa do wykonania o każdej porze roku. Świetny pomysł na prezent.",
    images: family,
  },
  "sesja-przyszla-mama": {
    title: "Sesja przyszła mama",
    description:
      "Plener, Apartament. Dla przyszłych mam chciałabym zaoferować piękne sesje w plenerze oraz w Apartamencie. Sesja może być wykonana również z rodziną. Możliwość wypożyczenia sukni ciążowych od 'DesignBlanca'. Świetny pomysł na prezent!",
    images: futuremother,
  },
  "sesja-kobieca-w-apartamencie": {
    title: "Sesja kobieca w apartamencie",
    description:
      "NOWOŚĆ! Sesja Apartament. Znaczenie zmysłowości dla każdej kobiety nie jest takie samo. Dlatego każda sesja jest zupełnie inna, twórcza, piękna. Zmysłowe sesje kobiece, cóż lepszego możemy zrobić dla samej siebie. Sesja kobieca to chwila tylko i wyłącznie dla Ciebie, do przełamania swoich słabości oraz pokazania siebie w świetle dziennym oraz delikatnym i subtelnym.",
    images: apartament,
  },
  "sesja-kobieca-w-plenerze": {
    title: "Sesja kobieca w plenerze",
    description:
      "Plener. MOŻLIWOŚĆ WYPOŻYCZENIA SUKNI od 'DesignBlanca'. Przenieśmy się w plener: wiosna, lato, jesień, zima - każda pora roku jest odpowiednia, aby wydobyć Twoje piękno.",
    images: openair,
  },
  "sesja-zakochanych": {
    title: "Sesja zakochanych",
    description:
      "Plener, Apartament. Zabierz swoją druga połówkę na sesje zdjęciową. Będzie to wspaniała przygoda, dzięki której jeszcze bardziej zbliżycie się do siebie. Świetny pomysł na prezent z okazji rocznicy, zaręczyn, ślubu.",
    images: lovers,
  },
  "portfolio-dla-firm": {
    title: "Portfolio dla firm",
    description:
      "Studio, Apartament, Plener, Twoje biuro lub salon. Sesja przeznaczona dla osób oraz grup, które już prowadzą swoją działalność i chcą ją zareklamować w social mediach. Sesja portfolio ukazuje Waszą pasję. Zdjęcia możecie wykorzystać do promowania siebie, swojej strony. Zapraszam do współpracy firmy oraz osoby prywatne.",
    images: portfolio,
  },
};

export async function getStaticPaths() {
  return {
    paths: Object.keys(daneGalerii).map((item) => ({ params: { id: item } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Pass post data to the page via props
  return {
    props: {
      images: daneGalerii[params.id].images,
      title: daneGalerii[params.id].title,
      description: daneGalerii[params.id].description,
      id: params.id,
    },
  };
}
