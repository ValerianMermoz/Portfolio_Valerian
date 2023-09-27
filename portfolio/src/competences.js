import HTML from "./images/icons/html.png";
import CSS from "./images/icons/css.png";
import JAVASCRIPT from "./images/icons/javascript.png";
import REACT from "./images/icons/react.png";
import TAILWIND from "./images/icons/tailwind.png";
import FIGMA from "./images/icons/figma.png";
function Competences() {
  return (
    <section
      className="min-h-screen min-w-375 text-center py-20 space-y-12 md:space-y-24 "
      id="Compétences"
    >
      <h2 className="text-3xl py-2 text-teal-600 font-medium underline md:text-5xl">
        MES COMPÉTENCES
      </h2>
      <div className="flex flex-col justify-between space-y-24 md:space-y-64">
        <div>
          <h3 className="text-med pb-24 leading-8 text-gray-800 md:text-3xl">
            HARD SKILLS
          </h3>
          <div className="flex  flex-wrap align-middle justify-center gap-10 py-8">
            <div className="pic">
              <img src={HTML} alt="logo HTML"/>
              <div className="text">
                <p>HTML</p>
              </div>
            </div>
            <div className="pic">
              <img src={CSS} alt="logo CSS" />
              <div className="text">
                <p>CSS</p>
              </div>
            </div>
            <div className="pic">
              <img src={JAVASCRIPT} alt="logo JAVASCRIPT"/>
              <div className="text">
                <p>JAVASCRIPT</p>
              </div>
            </div>
            <div className="pic">
              <img src={REACT} alt="logo REACT" />
              <div className="text">
                <p>REACT</p>
              </div>
            </div>
            <div className="pic">
              <img src={TAILWIND} alt="logo TAILWIND"/>
              <div className="text">
                <p>TAILWIND</p>
              </div>
            </div>
            <div className="pic">
              <img src={FIGMA} alt="logo FIGMA" />
              <div className="text">
                <p>FIGMA</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-med pb-24 leading-8 text-gray-800 md:text-3xl">
            SOFT SKILLS
          </h3>
          <div className="flex  flex-wrap align-middle justify-center gap-10 py-3">
            <div className="box">
              <p className="block lg:inline-block lg:mt-0 bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md">
                Autonomie
              </p>
            </div>
            <div className="box">
              <p className="block  lg:inline-block lg:mt-0 bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md">
                Travail d'équipe
              </p>
            </div>
            <div className="box">
              <p className="block lg:inline-block lg:mt-0 bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md">
                Curiosité
              </p>
            </div>
            <div className="box">
              <p className="block lg:inline-block lg:mt-0 bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md">
                Adaptabilité
              </p>
            </div>
            <div className="box">
              <p className="block lg:inline-block lg:mt-0 bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md">
                Esprit d'initiative
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competences;
