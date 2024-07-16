import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import SignUpForm from "./SignUpForm";
import "../../styles/SignUp.css";

function SignUp() {
  const [response, setResponse] = useState();

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/movie/37799/images";
    axios
      .get(url, {
        params: {
          api_key: import.meta.env.VITE_API_KEY,
        },
      })
      .then((res) => {
        setResponse(res.data);
      });
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="global-signup-container">
        <div className="signup-container">
          <div className="signup-form-container">
            <SignUpForm />
          </div>
          <div className="signup-img">
            {response ? (
              <img
                src={`https://image.tmdb.org/t/p/original${response.backdrops[14].file_path}`}
                alt="ImageP"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
