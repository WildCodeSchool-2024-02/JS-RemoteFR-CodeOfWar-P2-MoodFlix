import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import "../../styles/film/Crew.css";

export default function Crew() {
  const { crew } = useLoaderData();
  const initialLimit = 3;
  const [displayLimit, setDisplayLimit] = useState(initialLimit);
  const toggleDisplayLimit = () => {
    setDisplayLimit(
      displayLimit === initialLimit ? crew.cast.length : initialLimit
    );
  };

  const filteredCast = crew.cast.filter(
    (actor) =>
      actor.profile_path &&
      !actor.character.includes("(uncredited)") &&
      !actor.character.includes("(performer)")
  );
  const cast = filteredCast.slice(0, displayLimit);

  return (
    <section className="castingList">
      <h3>Acteurs / Actrice </h3>
      <div className="actor">
        {cast.map((actor) => (
          <Link to={`/actor/${actor.id}`} key={actor.id}>
            {" "}
            {actor.name} <br />
            <span className="role"> dans le role de </span> {actor.character}{" "}
          </Link>
        ))}
      </div>
      {crew.cast.length > initialLimit && (
        <button type="button" onClick={toggleDisplayLimit}>
          {displayLimit === initialLimit ? "Voir plus" : "Voir moins"}
        </button>
      )}
    </section>
  );
}
