import ImgCast from "./ImgCast";
import Biographie from "./Biographie";
import Filmographie from "./Filmographie";
import BestMovie from "./BestMovie";
import Layout from "../../components/layout/Layout";
import "../../styles/cast/Cast.css";

export default function Cast() {
  return (
    <Layout className="cast">
      <BestMovie />
      <header>
        <ImgCast />
        <Biographie />
      </header>
      <Filmographie />
    </Layout>
  );
}
