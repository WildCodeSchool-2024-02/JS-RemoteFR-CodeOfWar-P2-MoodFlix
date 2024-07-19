import { Link } from "react-router-dom";
import PasswordBoxs from "./PasswordBoxs";

function SignUpForm() {
  return (
    <div className="new-user-form-container">
      <h2>REJOIGNEZ-NOUS 🤝</h2>
      <div className="already-container">
        <p>DÉJÀ MEMBRE ?</p>
        <Link to="/Login">
          <p className="colorful-login">SE CONNECTER</p>
        </Link>
      </div>
      <form action="#">
        <div className="username-container">
          <div className="name-container">
            <label htmlFor="username" name="username">
              NOM D'UTILISATEUR
            </label>
            <input type="text" id="username" />
          </div>
          <div className="name-container">
            <label htmlFor="name" name="name">
              PRÉNOM
            </label>
            <input type="text" id="name" />
          </div>
        </div>
        <label htmlFor="email" name="email">
          ADRESSE E-MAIL
        </label>
        <input type="email" id="email" />
        <PasswordBoxs />
        <div className="signup-button-container">
          <button className="signup-button" type="submit">
            S'INSCRIRE
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
