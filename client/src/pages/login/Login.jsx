import Navbar from "../../components/Navbar";
import LoginForm from "./LoginForm";
import LoginImage from "../../assets/images/social-network.jpeg";

function Login() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <LoginForm />
            </div>
            <div className="login-img">
                <img src={LoginImage} alt="" />
            </div>
        </>
    );
};

export default Login;