import { Link } from "react-router-dom";

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
        <label htmlFor="username" name="username">
          USERNAME
        </label>
        <input type="username" id="username" />

        <label htmlFor="email" name="email">
          EMAIL
        </label>
        <input type="email" id="email" />

        <label htmlFor="password" name="password">
          PASSWORD
        </label>
        <input type="password" id="password" />

        <label htmlFor="confirm-password" name="password">
          CONFIRM YOUR PASSWORD
        </label>
        <input type="password" id="confirm-password" />

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
