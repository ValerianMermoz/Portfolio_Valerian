import { useParams } from "react-router-dom";
import Data from "./projet";

const Dataprojet = () => {
  const { id } = useParams();

  if (!Data || Data.length === 0) {
    console.error("Aucune donnée de projet n'est disponible.");
    return null;
  }

  const projet = Data.find((item) => item.id === id);

  if (!projet) {
    console.error(`Aucun projet trouvé avec l'ID : ${id}`);
    return null;
  }

  return projet; // Return the entire 'projet' object
};

export default Dataprojet;
