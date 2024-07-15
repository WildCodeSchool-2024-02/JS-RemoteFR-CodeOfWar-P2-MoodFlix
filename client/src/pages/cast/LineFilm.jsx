import PropTypes from "prop-types";
import "../../styles/cast/Cast.css";
import "../../styles/cast/Filmographie.css";
import Button from "../../assets/svg/Button.svg";

export default function LineFilm({ title, character }) {
  return (
    <section>
      <p>
        <img src={Button} alt="point" />
        {title}
      </p>
      <p className="role">dans le role de : {character}</p>
    </section>
  );
}
LineFilm.propTypes = {
  title: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
