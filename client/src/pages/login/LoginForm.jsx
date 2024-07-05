import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="login-form-container">
      <h2>WELCOME BACK👋</h2>
      <form action="#">
        <label htmlFor="email" name="email">
          MAIL ADDRESS
        </label>
        <input type="email" id="email" />

        <label htmlFor="password" name="password">
          PASSWORD
        </label>
        <input type="password" id="password" />

        <div className="options-container">
          <div className="checkbox-container">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">REMEMBER ME</label>
          </div>

          <div className="forgot-password">
            <Link to="/forgot">
              <p>FORGOT PASSWORD?</p>
            </Link>
          </div>
        </div>
        <div className="login-button-container">
          <button className="login-button" type="submit">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
