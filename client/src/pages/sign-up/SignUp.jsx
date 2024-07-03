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
      <div>
        <SignUpForm />
      </div>
      <div className="login-img">
        <img src={SignUpImage} alt="" />
      </div>
    </>
  );
}

export default SignUp;
