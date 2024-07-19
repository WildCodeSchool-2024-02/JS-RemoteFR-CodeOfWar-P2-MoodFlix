import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Suggestion({ children, className }) {
  return (
    <li className={className}>
      <Link to={`/mood/${children}`}>{children}</Link>
    </li>
  );
}

Suggestion.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
