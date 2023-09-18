const Projets = () => {
  return (
    <section className="min-h-screen" id="Projets">
      <h2 className="text-3xl py-10 text-teal-600 font-medium underline md:text-5xl text-center">
        MES PROJETS
      </h2>
      <div className="flex  flex-wrap align-middle justify-center gap-10 py-3">
        <article className="card card--1">
          <div className="card__info-hover">
            <div className="card__clock-info">
              <span className="text-1xl py-2 text-teal-600 font-medium ">
                Projet JAVASCRIPT
              </span>
            </div>
          </div>
          <div className="card__img"></div>
          <a
            href="https://github.com/ValerianMermoz/Sophie_Bluel"
            target="_blank"
            className="card_link"
            alt="projet sophie bluel"
          >
            <div className="card__img--hover"></div>
          </a>
          <div className="card__info">
            <span className="card__category">Sophie Bluel</span>
            <h3 className="card__title">Site portfolio d'une architecte</h3>
            <span className="card__by">
              {" "}
            </span>
          </div>
        </article>

        <article className="card card--2">
          <div className="card__info-hover">
            <div className="card__clock-info">
              <span className="text-1xl py-2 text-teal-600 font-medium ">
                Projet REACT
              </span>
            </div>
          </div>
          <div className="card__img"></div>
          <a
            href="https://github.com/ValerianMermoz/Kasa"
            target="_blank"
            className="card_link"
            alt="projet kasa"
          >
            <div className="card__img--hover"></div>
          </a>
          <div className="card__info">
            <span className="card__category">Kasa</span>
            <h3 className="card__title">Site d'hébergements</h3>
            <span className="card__by">
            </span>
          </div>
        </article>

        <article className="card card--3">
          <div className="card__info-hover">
            <div className="card__clock-info">
              <span className="text-1xl py-2 text-teal-600 font-medium ">
                Projet HTML/SASS
              </span>
            </div>
          </div>
          <div className="card__img"></div>
          <a
            href="https://github.com/ValerianMermoz/Ohmyfood"
            target="_blank"
            className="card_link"
            alt="lien vers le projet ohmyfood"
          >
            <div className="card__img--hover"></div>
          </a>
          <div className="card__info">
            <span className="card__category">Ohmyfood</span>
            <h3 className="card__title">Site "mobile first" de restaurants</h3>
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
        </article>

        <article className="card card--4">
          <div className="card__info-hover">
            <div className="card__clock-info">
              <span className="text-1xl py-2 text-teal-600 font-medium ">
                Projet SEO
              </span>
            </div>
          </div>
          <div className="card__img"></div>
          <a
            href="https://github.com/ValerianMermoz/Nina-Carducci"
            target="_blank"
            className="card_link"
            alt="lien vers le projet nina carducci"
          >
            <div className="card__img--hover"></div>
          </a>
          <div className="card__info">
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
        </article>
      </div>
    </section>
  );
};

export default Projets;
