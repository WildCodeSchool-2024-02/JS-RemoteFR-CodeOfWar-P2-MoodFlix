import PropTypes from "prop-types";

export default function HomeCard({ title, content }) {
  return (
    <div className="HomeCard">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
}

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
