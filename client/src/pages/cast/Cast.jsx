import ImgCast from "./ImgCast";
import Biographie from "./Biographie";
import ActorInfo from "./ActorInfo";
import Filmographie from "./Filmographie";
import Layout from "../../components/layout/Layout";
import "../../styles/cast/Cast.css";

export default function Cast() {
  return (
    <Layout className="cast">
      <header>
        <ImgCast />
        <Biographie />
      </header>
      <section>
        <ActorInfo />
        <Filmographie />
      </section>
    </Layout>
  );
}
