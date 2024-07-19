import { useLoaderData } from "react-router-dom";
import ActorInfo from "./ActorInfo";
import "../../styles/cast/Cast.css";

export default function Biographie() {
  const { cast } = useLoaderData();
  return (
    <section className="biographie">
      <h1>{cast.name}</h1>
      <ActorInfo />
      <hr />
      <div className="bio">
        {cast.biography ? (
          <>
            <h2>Biographie</h2>
            <p id="bio-paragraph">{cast.biography}</p>
          </>
        ) : null}
      </div>
    </section>
  );
}
