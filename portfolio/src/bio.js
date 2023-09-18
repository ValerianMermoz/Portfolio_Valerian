import photobio from "./images/icons/photobio.jpg";

function Bio() {
  return (
    <section className="min-h-screen" id="about-me">
      <div className="container">
        <div className="about-me-container">
          <h1 className="text-3xl py-2 text-teal-600 font-medium md:text-5xl">
            A propos de moi
          </h1>

          <div className="about-me-flex-container">
            <div className="about-me-image">
              <div className="back-div"></div>

              <div className="main-image">
                <img src={photobio} alt="bio" />
              </div>
            </div>
            <div className="about-me-content flex flex-wrap">
              <p className="text-xs py-2 px-5 md:text-lg leading-8 text-gray-800">
                Je m'appelle Valérian et mon histoire commence en 2017, au cours
                de  mon contrat d'alternance dans une petite usine, lors de mon cursus
                de BTS assistant de gestion PME/PMI. On me confie une mission,
                celle de répertorier, créer et déployer un site e-commerce.
                Malgrès le fait que cette mission n'était pas la principale de ma formation, elle fût néanmoins déterminante dans mon
                futur parcours professionnel.
              </p>
              <p className="text-xs md:text-lg px-5 py-2 leading-8 text-gray-800">
              Passioné de jeux et d'informatique, j'ai compris les enjeux de la conception d'un site internet. C'est l'image de votre entreprise, votre meilleur support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;
