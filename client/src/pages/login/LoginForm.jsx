import { useState } from "react";
import { Link } from "react-router-dom";
import openedEye from "../../assets/images/visibility.png";
import closedEye from "../../assets/images/visibility_off.png";

function LoginForm() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const profileLink = () => {
    console.info(import.meta.env.VITE_JOHN_DOE_EMAIL);
    if (
      email === import.meta.env.VITE_JOHN_DOE_EMAIL &&
      password === import.meta.env.VITE_JOHN_DOE_PASSWORD
    ) {
      return "/JohnDoeProfile";
    }
    if (
      email === import.meta.env.VITE_JANE_DOE_EMAIL &&
      password === import.meta.env.VITE_JANE_DOE_PASSWORD
    ) {
      return "/JaneDoeProfile";
    }
    return "/Profile";
  };

  return (
    <div className="login-form-container">
      <h2>BON RETOUR👋</h2>
      <form action="#">
        <label htmlFor="email" name="email">
          ADRESSE E-MAIL
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password" name="password">
          MOT DE PASSE
        </label>

        <div className="show-password-container">
          <input
            type={visible ? "text" : "password"}
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <button
            type="button"
            className="show-password-img"
            onClick={toggleVisibility}
          >
            <img
              src={visible ? closedEye : openedEye}
              alt={visible ? "Closed eye" : "Opened eye"}
            />
          </button>
        </div>

        <div className="options-container">
          <div className="checkbox-container">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">SE SOUVENIR DE MOI</label>
          </div>

          <div className="forgot-password">
            <Link to="/forgot">
              <p>MOT DE PASSE OUBLIÉ ?</p>
            </Link>
          </div>
        </div>
        <div className="login-button-container">
          <Link to={profileLink()}>
            <button className="login-button" type="submit">
              SE CONNECTER
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
