import PropTypes from "prop-types";
import baseImageUrl from "../../utils/baseImageUrl";

export default function Detail({film}) {
  console.info(film.genres)
  return (
    <section className="detail">
      <h1>{film.title}</h1>
      <img src={baseImageUrl+film.poster_path} alt={film.title}/>
       {film.genres.map((genre) => <p key={genre.id}> {genre.name} </p>)}
       <p>{film.release_date}</p>
       {film.production_companies.map((companie) => 
       <div key={companie.id}>
       <img  src={baseImageUrl+companie.logo_path} alt={companie.name} />
       <p > {companie.name} </p>
       </div>)}
    </section>
  );
}
Detail.propTypes = {
  film: PropTypes.string.isRequired,
};
