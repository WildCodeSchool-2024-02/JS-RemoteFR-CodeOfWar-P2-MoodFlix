import { useState } from "react";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
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
            <input type="username" id="username" />
          </div>
          <div className="name-container">
            <label htmlFor="name" name="name">
              NAME
            </label>
            <input type="name" id="name" />
          </div>
        </div>
        <label htmlFor="email" name="email">
          EMAIL
        </label>
        <input type="email" id="email" />

        <label htmlFor="password" name="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />

        <label htmlFor="confirm-password" name="password">
          CONFIRM YOUR PASSWORD
        </label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
        {password !== confirmPassword ? <p>INVALID PASSWORD ❌</p> : null}

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
