import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <div className="sign-up-form-container">
      <h2>JOIN US 🤝</h2>
      <div className="already-container">
        <p>Already a member?</p>
        <Link to="/Login">LOGIN</Link>
      </div>
      <form action="#">
        <label htmlFor="username" name="username">
          USERNAME
        </label>
        <input type="username" id="username" />

        <label htmlFor="name" name="name">
          NAME
        </label>
        <input type="name" id="name" />

        <label htmlFor="email" name="email">
          EMAIL
        </label>
        <input type="email" id="email" />

        <label htmlFor="password" name="password">
          PASSWORD
        </label>
        <input type="password" id="password" />

        <label htmlFor="confirmation" name="confirmation">
          CONFIRM YOUR PASSWORD
        </label>
        <input type="confirmation" id="confirmation" />

        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
}

export default SignUpForm;
