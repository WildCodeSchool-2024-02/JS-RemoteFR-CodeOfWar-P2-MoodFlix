import { useLoaderData } from "react-router-dom";
import Detail from "./Detail";
import Crew from "./Crew";
import Synopsis from "./Synopsis";
import Image from "./Image";
import "../../styles/film/film.css";
import Layout from "../../components/layout/Layout";

function Film() {
  const { film } = useLoaderData();
  return (
    <Layout className="film">
      <div className="tagline">
        <h2>{film.tagline}</h2>
      </div>
      <Image />

      <Detail film={film} />
      <section className="secondPart">
        <Synopsis />
        <Crew />
      </section>
    </Layout>
  );
}

export default Film;
