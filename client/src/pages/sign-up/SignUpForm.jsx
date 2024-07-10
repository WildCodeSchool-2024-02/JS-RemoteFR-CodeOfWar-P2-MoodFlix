import { Link } from "react-router-dom";
import PasswordBoxs from "./PasswordBoxs";

function SignUpForm() {

    return (
        <div className="sign-up-form-container">
            <h2>JOIN US 🤝</h2>
            <div className="already-container">
                <p>ALREADY A MEMBER?</p>
                <Link to="/Login">
                    <p className="colorful-login">LOGIN</p>
                </Link>
            </div>
            <form action="#">
                <div className="username-container">
                    <div className="name-container">
                        <label htmlFor="username" name="username">
                            USERNAME
                        </label>
                        <input type="text" id="username" />
                    </div>
                    <div className="name-container">
                        <label htmlFor="name" name="name">
                            NAME
                        </label>
                        <input type="text" id="name" />
                    </div>
                </div>
                <label htmlFor="email" name="email">
                    EMAIL
                </label>
                <input type="email" id="email" />
                <PasswordBoxs />
                <div className="signup-button-container">
                    <button className="signup-button" type="submit">
                        SIGN UP
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;
