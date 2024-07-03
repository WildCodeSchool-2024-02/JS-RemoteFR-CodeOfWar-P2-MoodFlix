
import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Detail from "./Detail";
import Crew from "./Crew";
import Synopsis from "./Synopsis";
import Image from "./Image";

function Film() {
  const { film } = useLoaderData()
  console.info(film)
    return (
      <main className="film">
        <Navbar />
            <Image />
            <Detail film={film} />
            <Synopsis />
            <Crew />

      </main>
    );
  }
  
  export default Film;