import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Detail from "./Detail";
import Crew from "./Crew";
import Synopsis from "./Synopsis";
import Image from "./Image";
import "../../styles/film/film.css";

function Film() {
  const { film } = useLoaderData();
  console.info(film);
  return (
    <main className="film">
      <Navbar />
      <div className="tagline">
        <h2>{film.tagline}</h2>
      </div>
      <Image />

      <Detail film={film} />
      <section className="secondPart">
        <Synopsis />
        <Crew />
      </section>
    </main>
  );
}

export default Film;
