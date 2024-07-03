import PropTypes from "prop-types";
import baseImageUrl from "../../utils/baseImageUrl";
import "../../styles/film/Detail.css";

export default function Detail({film}) {
  return (
    <section className="detail">
      <div className="leftPart">
        <h1>{film.title}</h1>
        <img className="poster" src={baseImageUrl+film.poster_path} alt={film.title}/>
      </div>
      <div className="middlePart">
        {film.genres.map((genre) => <p key={genre.id}> {genre.name} </p>)}
      </div>
      <div className="rightPart">
        <p>{film.release_date}</p>
        {film.production_companies.map((companie) => 
        <div key={companie.id}>
        <p > {companie.name} </p>
        </div>)}
      </div>
    </section>
  );
}
Detail.propTypes = {
  film: PropTypes.shape({
    title : PropTypes.string,
    poster_path : PropTypes.string,
    release_date : PropTypes.string,
    production_companies : PropTypes.arrayOf(PropTypes.shape({
      name : PropTypes.string,
    })),
    genres : PropTypes.arrayOf(PropTypes.shape({
      id : PropTypes.number,
      name : PropTypes.string,
    }))
    }).isRequired,
};
