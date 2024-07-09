import Navbar from "../../components/Navbar";
import SignUpForm from "./SignUpForm";
import SignUpImage from "../../assets/images/social-network.jpeg";
import "../../styles/SignUp.css";

function SignUp() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="global-container">
        <div className="login-container">
          <div className="form-container">
            <SignUpForm />
          </div>
          <div className="login-img">
            <img
              src={SignUpImage}
              alt="Discussion scene between the main characters in the film The Social Network"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
