import { useParams } from "react-router-dom";
import { moodTable } from "../../services/getMoviesByMood";
import "../../styles/tag/Tag.css";
import Layout from "../../components/layout/Layout";
import FilmsTag from "./Films.tag";

export default function Tag() {
  const { mood } = useParams();
  const dataMood = mood in moodTable ? moodTable[mood] : moodTable.action;

  return (
    <Layout className="tag">
      <h1>
        {dataMood.emoji}{" "}
        <span>{mood[0].toUpperCase() + mood.slice(1).toLowerCase()}</span>
      </h1>
      <h2>{dataMood.description}</h2>
      <FilmsTag />
    </Layout>
  );
}
