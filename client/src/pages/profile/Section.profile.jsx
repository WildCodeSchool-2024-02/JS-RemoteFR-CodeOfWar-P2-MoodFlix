import PropTypes from "prop-types";

export default function SectionProfile({ title, children }) {
  return (
    <section className={title.toLowerCase().replace(" ", "-")}>
      <h2>{title.toUpperCase()}</h2>
      <hr />
      <div>{children}</div>
    </section>
  );
}

SectionProfile.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
