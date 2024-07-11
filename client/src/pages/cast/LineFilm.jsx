import PropTypes from "prop-types";

export default function LineFilm({ title, character }) {
  return (
    <section>
      <div>{title}</div>
      <div>{character}</div>
    </section>
  );
}
LineFilm.propTypes = {
  title: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
