import { useLoaderData } from "react-router-dom";

import "../../styles/film/Crew.css";

export default function Crew() {
  const { crew } = useLoaderData();
  const cast = crew.cast.slice(0, 3);
  return (
    <section className="actor">
      <h3>Acteurs / Actrice </h3>
      <div className="actor">
        {cast.map((actor) => (
          <p key={actor.id}>
            {" "}
            {actor.name} <br />
            <span className="role"> dans le role de </span> {actor.character}{" "}
          </p>
        ))}
      </div>
    </section>
  );
}
