import { useLoaderData } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Header from "./Header.profile";
import Section from "./Section.profile";
import FilmProfile from "./Film.profile";
import "../../styles/profile/Profile.css";

function Profile() {
  const data = useLoaderData();

  console.info(data);
  return (
    <Layout className="profile">
      <Header />
      <main>
        <Section title="Favorite Films">
          {data.slice(0, 4).map((film) => (
            <FilmProfile film={film} key={film.title} />
          ))}
        </Section>
        <Section title="RECENT ACTIVITY">
          {data.slice(4, 8).map((film) => (
            <FilmProfile film={film} key={film.title} />
          ))}
        </Section>
        <Section title="WATCHLIST">???</Section>
        <Section title="LISTES">???</Section>
        <Section title="tags">???</Section>
      </main>
    </Layout>
  );
}

export default Profile;
