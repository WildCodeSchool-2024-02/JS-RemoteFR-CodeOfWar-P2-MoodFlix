
import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar";


function Film() {
const film = useLoaderData()
    return (
      <main className="film">
        <Navbar />
            <h1>{film.title}</h1>

      </main>
    );
  }
  
  export default Film;