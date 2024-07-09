import { useState } from "react";
import { Link } from "react-router-dom";
import eyeOpened from "../../assets/images/visibility.png";
import eyeClosed from "../../assets/images/visibility_off.png";

function SignUpForm() {
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [visible, setVisible] = useState(false);

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

    const toggleVisibility = () => {
        setVisible(!visible);
    };

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

                <label htmlFor="password" name="password">
                    PASSWORD
                </label>
                <div className="show-password-container">
                    <input
                        type={visible ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={handlePassword}
                    />

                    <button type="button" className="show-password-img" onClick={toggleVisibility}>
                        <img src={visible ? eyeClosed : eyeOpened} alt="coucou" />
                    </button>

                    <div className="hide-password-img">
                        <img src={eyeClosed} alt="closed eye" />
                    </div>
                </div>

                <label htmlFor="confirm-password" name="password">
                    CONFIRM YOUR PASSWORD
                </label>
                <div className="show-password-container">
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={handleConfirmPassword}
                    />
                    <div className="show-password-img">
                        <img src={eyeOpened} alt="opened eye" />
                    </div>

                    <div className="hide-password-img">
                        <img src={eyeClosed} alt="closed eye" />
                    </div>
                </div>
                {password && confirmPassword && password !== confirmPassword ? (
                    <p>INVALID PASSWORD ❌</p>
                ) : null}
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
