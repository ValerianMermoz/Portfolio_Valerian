import photobio from "./images/icons/photobio.jpg";

function Bio() {
  return (
    <section className="min-h-fit md:pb-24" id="about-me">
      <div className="container">
        <div className="about-me-container">
          <h1 className="text-3xl py-2 text-teal-600 font-medium lg:text-5xl">
            A propos de moi
          </h1>

          <div className="about-me-flex-container">
            <div className="about-me-image">
              <div className="back-div"></div>

              <div className="main-image">
                <img src={photobio} alt="bio" />
              </div>
            </div>
            <div className="about-me-content flex flex-wrap overflow-hidden ">
              <p className="biography">
                Je m'appelle Valérian et mon histoire commence en 2017, au cours
                de  mon contrat d'alternance dans une petite usine, lors de mon cursus
                de BTS assistant de gestion PME/PMI. On me confie une mission,
                celle de répertorier, créer et déployer un site e-commerce.
                Malgrès le fait que cette mission n'était pas la principale de ma formation, elle fût néanmoins déterminante dans mon
                futur parcours professionnel.
              </p>
              <p className="biography">
              Aujourd'hui, j'ai compris les enjeux de la conception d'un site internet. En constante évolution par l'apprentissage de nouveaux languages de programmation et de technique, j'apporte ma modeste contribution dans le monde du web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;
