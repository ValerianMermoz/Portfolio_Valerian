import Projets from "./projets";
import Header from "./header";
import Contact from "./contact";
import Competences from "./competences";
import Bio from "./bio"
import Data from './projet';
import { useParams } from 'react-router-dom';

function Page() {
  return (
    <main className="scroller">
      <div className="loader">
        <span className="circle circle-1"></span>
        <span className="circle circle-2"></span>
        <span className="circle circle-3"></span>
        <span className="circle circle-4"></span>
        <span className="circle circle-5"></span>
        <span className="circle circle-6"></span>
        <span className="circle circle-7"></span>
        <span className="circle circle-8"></span>
      </div>
      <div className="bg-white">
        <Header />
        <Bio/>
        <Competences />
        <Projets />
        <Contact />
      </div>
    </main>
  );
}

export default Page;
