import Navbar from "../../components/Navbar";
import LoginForm from "./LoginForm";
import LoginImage from "../../assets/images/social-network.jpeg";
import "../../styles/Login.css";

function Login() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="global-container">
        <div className="login-container">
          <div className="form-container">
            <LoginForm />
          </div>
          <div className="login-img">
            <img
              src={LoginImage}
              alt="Discussion scene between the main characters in the film The Social Network"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
