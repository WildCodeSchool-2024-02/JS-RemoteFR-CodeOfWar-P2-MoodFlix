import { useLoaderData } from "react-router-dom";
import "../../styles/film/Synopsis.css";

export default function Synopsis() {
  const { film } = useLoaderData();
  return (
    <section className="synopsis">
      <h3>Synopsis</h3>
      <div>{film.overview}</div>
    </section>
  );
}
