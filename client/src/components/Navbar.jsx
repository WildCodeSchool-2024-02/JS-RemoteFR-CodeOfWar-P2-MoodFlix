import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import SvgPerson from "../assets/svg/person.svg";
import SvgPeople from "../assets/svg/people.svg";

export default function Navbar() {
  return (
    <nav className="site-navbar">
      <h1 className="site-title">🎥 MoodFlix</h1>

      <div className="user-actions">
        <Link to="/SignUp">
          <button type="button" className="user-buttons sign-up">
            <img className="svg person" alt="sign in button" src={SvgPerson} />
            <p>S'INSCRIRE</p>
          </button>
        </Link>
        <Link to="/Login">
          <button type="button" className="user-buttons login">
            <img className="svg people" alt="login button" src={SvgPeople} />
            SE CONNECTER
          </button>
        </Link>
      </div>
    </nav>
  );
}
