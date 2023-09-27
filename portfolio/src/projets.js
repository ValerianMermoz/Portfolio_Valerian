import Github from "./images/icons/github.png";

const Projets = () => {
  return (
    <section className="min-h-screen" id="Projets">
      <h2 className="text-3xl py-10 text-teal-600 font-medium underline md:text-5xl text-center">
        MES PROJETS
      </h2>
      <div className="flex  flex-wrap align-middle justify-center gap-10 py-5">
        <article className="card card--1 relative">
          <span className="absolute  top-20 pl-2 pr-2 font-raleway font-bold">
            Projet de formation OpenClassrooms, portant sur l'utilisation de
            Javascript et Swagger dans le but de créer une page de connexion
            fonctionnelle, une galerie d'images triable ainsi que la possibilité
            d'ajout ou de suppressions d'images.
          </span>
          <div className="card__info-hover">
            <div className="card__clock-info">
              <span className="text-1xl py-2 text-teal-600 font-medium ">
                Projet JAVASCRIPT
              </span>
            </div>
          </div>
          <div className="card__img" title="card"></div>
          <div className="card__img--hover" title="Sophie Bluel"></div>
          <div className="card__info">
            <div className="cardtext">
              <span className="card__category">Sophie Bluel</span>
              <h3 className="card__title">Site portfolio d'une architecte</h3>
            </div>
            <div>
              <a
                href="https://github.com/ValerianMermoz/Sophie_Bluel"
                target="_blank"
                className="card_link"
                alt="projet sophie bluel"
                aria-label="first link"
              >
                <img
                  src={Github}
                  className="hover:animate-[wiggle_0.4s_ease-in-out] p-4"
                ></img>{" "}
              </a>
            </div>
          </div>
        </article>

        <article className="card card--2 relative">
          <span className="absolute  top-20 pl-2 pr-2 font-raleway font-bold">
            Projet de formation OpenClassrooms, portant sur la découverte de
            REACT, l'initialisation d'une application avec Create React APP, le
            développement des éléments d'interfaces grâce à des composants ou
            encore l'utilisations des hooks.
          </span>
          <div className="card__info-hover">
            <div className="card__clock-info">
              <span className="text-1xl py-2 text-teal-600 font-medium ">
                Projet REACT
              </span>
            </div>
          </div>
          <div className="card__img" title="Kasa"></div>

          <div className="card__img--hover" title="Kasa"></div>

          <div className="card__info">
            <div className="cardtext">
              <span className="card__category">Kasa</span>
              <h3 className="card__title">Site d'hébergements</h3>
            </div>
            <div>
              <a
                href="https://github.com/ValerianMermoz/Kasa"
                target="_blank"
                className="card_link"
                alt="projet kasa"
                aria-label="second link"
              >
                <img
                  src={Github}
                  className="hover:animate-[wiggle_0.4s_ease-in-out] p-4"
                ></img>{" "}
              </a>
            </div>
          </div>
        </article>

        <article className="card card--3 relative">
          <span className="absolute  top-20 pl-2 pr-2 font-raleway font-bold">
            Projet de formation OpenClassrooms, portant sur l'utilisation de
            SASS, la création d'animations, d'éléments responsives et
            d'intégration de maquette.
          </span>
          <div className="card__info-hover">
            <div className="card__clock-info">
              <span className="text-1xl py-2 text-teal-600 font-medium ">
                Projet HTML/SASS
              </span>
            </div>
          </div>

          <div className="card__img" title="Ohmyfood"></div>
          <div className="card__img--hover" title="Ohmyfood"></div>
          <div className="card__info">
            <div className="cardtext">
              <span className="card__category">Ohmyfood</span>
              <h3 className="card__title">
                Site "mobile first" de restaurants
              </h3>
              <span className="card__by">
                <a
                  href="https://valerianmermoz.github.io/Ohmyfood/"
                  target="_blank"
                  className="card__author"
                  title="author"
                  alt="projet ohmyfood"
                >
                  Voir le site
                </a>
              </span>
            </div>
            <div>
              <a
                href="https://github.com/ValerianMermoz/Ohmyfood"
                target="_blank"
                className="card_link"
                alt="lien vers le projet ohmyfood"
                aria-label="third link"
              >
                <img
                  src={Github}
                  className="hover:animate-[wiggle_0.4s_ease-in-out] p-4"
                ></img>{" "}
              </a>
            </div>
          </div>
        </article>

        <article className="card card--4 relative">
          <span className="absolute  top-20 pl-2 pr-2 font-raleway font-bold">
            Projet de formation OpenClassrooms, portant sur l'optimisation du
            référencement d'un site web à l'aide d'outils comme WAVE, Lighthouse
            et Rich Snippet Google.
          </span>
          <div className="card__info-hover">
            <div className="card__clock-info">
              <span className="text-1xl py-2 text-teal-600 font-medium ">
                Projet SEO
              </span>
            </div>
          </div>
          <div className="card__img" title="Nina Carducci"></div>

          <div className="card__img--hover" title="Nina Carducci"></div>

          <div className="card__info">
            <div className="cardtext">
              <span className="card__category">Nina Carducci</span>
              <h3 className="card__title">Site de photographe événementiel</h3>
              <span className="card__by">
                <a
                  href="https://valerianmermoz.github.io/Nina-Carducci/"
                  target="_blank"
                  className="card__author"
                  title="author"
                  alt="projet nina carducci"
                >
                  Voir le site
                </a>
              </span>
            </div>
            <div>
              <a
                href="https://github.com/ValerianMermoz/Nina-Carducci"
                target="_blank"
                className="card_link"
                alt="lien vers le projet nina carducci"
                aria-label="fourth link"
              >
                <img
                  src={Github}
                  className="hover:animate-[wiggle_0.4s_ease-in-out] p-4"
                ></img>{" "}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Projets;

// {
//   const projet = Dataprojet();
//    const { author, title, description, tags } = projet;

//   return (
//     <section className="min-h-screen" id="Projets">
//       <div className="flex  flex-wrap align-middle justify-center gap-10 py-5">
//         <article className="card card--2 relative">
//           <span className="absolute  top-20 pl-2 pr-2 font-raleway font-bold">
//             {description}
//           </span>
//           <div className="card__info-hover">
//             <div className="card__clock-info">
//               <span className="text-1xl py-2 text-teal-600 font-medium ">
//                 {tags}
//               </span>
//             </div>
//           </div>
//           <div className="card__img" title="card"></div>
//           <div className="card__img--hover"></div>
//           <div className="card__info">
//             <span className="card__category">{author}</span>
//             <h3 className="card__title">{title}</h3>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// };
