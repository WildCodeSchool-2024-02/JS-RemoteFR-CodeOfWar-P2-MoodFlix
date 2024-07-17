import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import LoginForm from "./LoginForm";
import "../../styles/Login.css";


function random(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}
const randomIndex = random(1, 35);

function Login() {
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
        console.info(res.data);
        setResponse(res.data);
      });
  }, []);

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
            {response ? (
              <img
                src={`https://image.tmdb.org/t/p/original${response.backdrops[randomIndex].file_path}`}
                alt="ImageP"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
