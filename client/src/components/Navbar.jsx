import "../styles/Navbar.css";
import SvgPerson from "../assets/svg/person.svg";
import SvgPeople from "../assets/svg/people.svg";

export default function Navbar() {
    return (
        <nav className="site-navbar">
            <h1 className="site-title">🎥MoodFlix</h1>
            <div className="user-actions">
                <button type="button" className="user-buttons sign-up">
                    <img className="svg person" alt="sign in button" src={SvgPerson} />
                    Sign Up
                </button>
                <button type="button" className="user-buttons login">
                    <img className="svg people" alt="login button" src={SvgPeople} />
                    Login
                </button>
            </div>
        </nav>
    );
}
