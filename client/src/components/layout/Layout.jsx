import PropTypes from "prop-types";
import Navbar from "../Navbar";

export default function Layout({ children, className }) {
  return (
    <>
      <Navbar />
      <main className={className}>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
};
