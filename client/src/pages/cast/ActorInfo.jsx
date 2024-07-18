import { useLoaderData } from "react-router-dom";
import "../../styles/cast/Cast.css";
import ageNow from "../../utils/ageNow";

export default function ActorInfo() {
  const { cast, credit } = useLoaderData();
  let gender;
  if (cast.gender === 1) {
    gender = "Femme";
  } else if (cast.gender === 2) {
    gender = "Homme";
  } else if (cast.gender === 3) {
    gender = "Non-Binaire";
  } else {
    gender = "";
  }

  const birth = new Date(cast.birthday);
  const death = new Date(cast.deathday);
  const today = new Date();
  const age = ageNow(today, birth, death, cast.deathday);

  return (
    <div className="detailActor">
      <p>
        {" "}
        Genre : <br />
        {gender}
      </p>
      <p>
        Nombres d'apparition au cinéma : <br />
        {credit.cast.length}
      </p>
      <p>
        Date de naissance : <br />
        {birth.toLocaleDateString("fr-FR")} ({age} ans)
      </p>
      <p>
        Lieu de naissance : <br />
        {cast.place_of_birth}
      </p>
      {cast.deathday ? (
        <p className="death">
          Date de décès : <br />
          {death.toLocaleDateString("fr-FR")}
        </p>
      ) : null}
    </div>
  );
}
