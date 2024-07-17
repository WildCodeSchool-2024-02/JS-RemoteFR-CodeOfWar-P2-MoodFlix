import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Detail from "./Detail";
import Crew from "./Crew";
import Synopsis from "./Synopsis";
import Image from "./Image";
import "../../styles/film/film.css";
import Layout from "../../components/layout/Layout";

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
};

function Film() {
  const { film } = useLoaderData();
  const { width } = useWindowDimensions();

  return (
    <div className="filmContainer">
      <Layout className="film">
        {width >= 480 ? <Image /> : null}
        <Detail film={film} />
        <section className="secondPart">
          <Synopsis />
          <Crew />
        </section>
      </Layout>
    </div>
  );
}

export default Film;
