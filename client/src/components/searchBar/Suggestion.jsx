import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Suggestion({ children }) {
  return (
    <li>
      <Link to={`/mood/${children}`}>{children}</Link>
    </li>
  );
}

Suggestion.propTypes = {
  children: PropTypes.string.isRequired,
};
