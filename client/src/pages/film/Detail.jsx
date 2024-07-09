import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";

import baseImageUrl from "../../utils/baseImageUrl";
import "../../styles/film/Detail.css";

export default function Detail({ film }) {
  const { crew } = useLoaderData();

  const duration = film.runtime;
  const durationHour = Math.floor(duration / 60);
  const durationMin = duration % 60;

  const date = film.release_date;
  const [year, month, day] = date.split('-');
  const dateRealease = `${day}-${month}-${year}`


  const writers = crew.crew.filter(
    (crewMembers) =>
      crewMembers.job === "Screenplay" || crewMembers.job === "Writer"
  );
  const composers = crew.crew.filter(
    (crewMembers) => crewMembers.job === "Original Music Composer"
  );
  const directors = crew.crew.filter(
    (crewMembers) => crewMembers.job === "Director"
  );

  
  return (
    <section className="detail">
      <div className="leftPart">
        <h1>{film.title}</h1>
        <img
          className="poster"
          src={baseImageUrl + film.poster_path}
          alt={film.title}
        />
      </div>
      <div className="MiddlePart">
        <p>
        {durationHour !== 0 ? `${durationHour}h ` : ''}
        {durationMin !== 0 ? `${durationMin}min` : ''}
        </p>
        <div className="crew">
          <span>Film de </span>
          {directors.map((director) => (
            <p key={director.id}> {director.name}</p>
          ))}
          <span> par </span>
          {writers.map((writer) => (
            <p key={writer.id}>{writer.name}</p>
          ))}
          <span> Musique de </span>
          {composers.map((composer) => (
            <p key={composer.id}>{composer.name}</p>
          ))}
        </div>
      </div>
      <div className="genre">
        {film.genres.map((genre) => (
          <p key={genre.id}> {genre.name} </p>
        ))}
      </div>
      <div className="rightPart">
        <p>{dateRealease}</p>
        {film.production_companies.map((companie) => (
          <div key={companie.id}>
            <p> {companie.name} </p>
          </div>
        ))}
      </div>
    </section>
  );
}
Detail.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string,
    runtime: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    production_companies: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};
