import { ReactComponent as Github } from "./images/icons/github.svg";
import { ReactComponent as Instagram } from "./images/icons/instagram.svg";
import { ReactComponent as Linkedin } from "./images/icons/linkedin.svg";
import { ReactComponent as HTML } from "./images/icons/HTML.svg";
import { ReactComponent as CSS } from "./images/icons/CSS.svg";
import { ReactComponent as JAVASCRIPT } from "./images/icons/JAVASCRIPT.svg";
import { ReactComponent as REACT } from "./images/icons/REACT.svg";
import { ReactComponent as TAILWIND } from "./images/icons/TAILWIND.svg";
import { ReactComponent as NEXTJS } from "./images/icons/NEXTJS.svg";
import Logo from "./images/icons/logo.png";
import Booki from "./images/projets/Booki.png";
import Ohmyfood from "./images/projets/Ohmyfood.png";
import Kasa from "./images/projets/Kasa.png";
import Bluel from "./images/projets/Sophie_Bluel.png";

function Page() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
        <img
              src={Logo}
              className="rounded-lg object-cover"
width="100px"
              layout="responsive"
            />
          <ul className="flex items-center">
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Mon CV
              </a>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 py-10">
          <h1 className="text-5xl py-2 text-teal-600 font-medium">
            Bienvenue sur mon Portfolio
          </h1>
          <p className="text-md py-5 leading-8 text-gray-800">
            J'ai commencé le développement en Janvier 2023
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-10 py-3">
          <Instagram />
          <Linkedin />
          <a href="https://github.com/ValerianMermoz">
            <Github/>
          </a>
        </div>
      </section>
      <section>
        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium underline">
            COMPÉTENCES
          </h2>
          <p className="text-md py-2 leading-8 text-gray-800">
            Voici les frameworks et bibliothèques que j'utilise :
          </p>
          <div className=" flex  flex-wrap align-middle justify-center gap-10 py-3">
            <HTML />
            <CSS />
            <JAVASCRIPT />
            <REACT />
            <TAILWIND />
            <NEXTJS />
          </div>
        </div>
      </section>
      <section>
        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium underline">
            MES PROJETS
          </h2>
        </div>
        <div className="flex flex-col gap-5 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl hover:bg-sky-700">
            <img
              src={Booki}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl hover:bg-sky-700">
            <img
              src={Bluel}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl hover:bg-sky-700">
            <img
              src={Ohmyfood}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl hover:bg-sky-700">
            <img
              src={Kasa}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
