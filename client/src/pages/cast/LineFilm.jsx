import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/cast/Cast.css";
import "../../styles/cast/Filmographie.css";
import Button from "../../assets/svg/Button.svg";

export default function LineFilm({ film, desactivate }) {
  return (
    <section>
      <p>
        <img src={Button} alt="point" />
        <Link to={!desactivate ? "/404" : `/film/${film.id}`} key={film.id}>
          {film.title}
        </Link>
      </p>
      <p className="role">dans le role de : {film.character}</p>
    </section>
  );
}
LineFilm.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string,
    character: PropTypes.string,
    id: PropTypes,
  }).isRequired,
  desactivate: PropTypes.bool.isRequired,
};
