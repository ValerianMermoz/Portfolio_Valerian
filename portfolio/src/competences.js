import { ReactComponent as HTML } from "./images/icons/HTML.svg";
import { ReactComponent as CSS } from "./images/icons/CSS.svg";
import { ReactComponent as JAVASCRIPT } from "./images/icons/JAVASCRIPT.svg";
import { ReactComponent as REACT } from "./images/icons/REACT.svg";
import { ReactComponent as TAILWIND } from "./images/icons/TAILWIND.svg";
import { ReactComponent as NEXTJS } from "./images/icons/NEXTJS.svg";

function Competences() {
  return (
    <section className="min-h-screen min-w-375 text-center py-20 space-y-12 md:space-y-24" id="Compétences">
        <h2 className="text-3xl py-2 text-teal-600 font-medium underline md:text-5xl">
          MES COMPÉTENCES
        </h2>
        <div className="flex flex-col justify-between space-y-24 md:space-y-64">
          <div>
            <h3 className="text-med py-2 leading-8 text-gray-800 md:text-3xl">
              HARD SKILLS
            </h3>
            <div className="flex  flex-wrap align-middle justify-center gap-10 py-3">
              <HTML />
              <CSS />
              <JAVASCRIPT />
              <REACT />
              <TAILWIND />
              <NEXTJS />
            </div>
          </div>
          <div>
            <h3 className="text-med py-2 leading-8 text-gray-800 md:text-3xl">
              SOFT SKILLS
            </h3>
            <div className="flex  flex-wrap align-middle justify-center gap-10 py-3">
            <p className="block lg:inline-block lg:mt-0 bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md">
           Autonomie
         </p>
         <p className="block  lg:inline-block lg:mt-0 bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md">
           Travail d'équipe
         </p>
         <p className="block lg:inline-block lg:mt-0 bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md">
           Curiosité
         </p>
         <p className="block lg:inline-block lg:mt-0 bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md">
           Adaptabilité
         </p>
         <p className="block lg:inline-block lg:mt-0 bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md">
           Esprit d'initiative
         </p>

            </div>
          </div>
        </div>
    </section>
  );
}

export default Competences;
