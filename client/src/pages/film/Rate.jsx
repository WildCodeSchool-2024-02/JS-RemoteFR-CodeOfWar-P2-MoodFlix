import PropTypes from "prop-types";
import "../../styles/film/Rate.css";

export default function Rate({ progress }) {
  const radius = 40;
  const circumference = 2 * Math.PI * (radius - 5);
  const dashLength = (progress / 100) * circumference;
  const viewBox = [0, 0, 2 * radius, 2 * radius];
  let stroke;
  if (progress < 25) {
    stroke = "#ff0000";
  } else if (progress < 50) {
    stroke = "#ff9100";
  } else if (progress < 75) {
    stroke = "#fff800";
  } else {
    stroke = "#38ff00";
  }

  return (
    <svg
      width={2 * radius}
      height={2 * radius}
      viewBox={viewBox}
      className="circular-progress"
    >
      <circle
        cx={radius}
        cy={radius}
        r={radius - 5}
        stroke="black"
        strokeWidth="10"
        fill="none"
      />
      <text x="50%" y="50%" dy=".4rem" textAnchor="middle">
        <tspan>{Math.floor(progress)}</tspan>%
      </text>
      <circle
        cx={radius}
        cy={radius}
        r={radius - 5}
        stroke={stroke}
        strokeLinecap="round"
        strokeWidth="10"
        strokeDasharray={[dashLength, circumference - dashLength]}
        strokeDashoffset={circumference / 4}
        fill="none"
      />
    </svg>
  );
}

Rate.propTypes = {
  progress: PropTypes.number.isRequired,
};
