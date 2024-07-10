import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="login-form-container">
      <h2>BON RETOUR👋</h2>
      <form action="#">
        <label htmlFor="email" name="email">
          ADRESSE E-MAIL
        </label>
        <input type="email" id="email" />

        <label htmlFor="password" name="password">
          MOT DE PASSE
        </label>
        <input type="password" id="password" />

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
          <button className="login-button" type="submit">
            SE CONNECTER
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
