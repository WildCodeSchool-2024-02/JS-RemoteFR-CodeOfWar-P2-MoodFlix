import Navbar from "./components/Navbar";
import HomeImages from "./components/HomeImages";
import HomeCard from "./components/HomeCard";
import "./styles/Global.css";
import "./styles/HomeCard.css";
import "./styles/HomePage.css";

const cardsData = [
  {
    title: "📝 Tenir un journal",
    content: "de vos visionnages de films et conserver des données organisées",
  },
  {
    title: "✍🏻 Rédiger des critiques",
    content:
      "Rédigez et partagez les critiques des derniers films que vous avez regardés",
  },
  {
    title: "🗃️ Créer des listes",
    content:
      "compiler et partager des listes de films sur n'importe quel sujet et conserver une liste de surveillance des films à voir",
  },
  {
    title: "👩‍👩‍👧‍👧 Rejoindre la communauté",
    content: "et rencontrer des gens qui aiment le cinéma autant que vous !",
  },
];

function App() {
  return (
    <main className="homepage">
      <Navbar />
      <section className="left">
        <h2>
          Votre écran, votre passion,
          <br />
          votre <span>communauté</span>.
        </h2>
        <h3>
          <u>Ensemble</u>, faisons vivre notre amour du cinéma et des séries !
        </h3>
        <div>
          {cardsData.map((data) => (
            <HomeCard
              key={data.title}
              title={data.title}
              content={data.content}
            />
          ))}
        </div>
      </section>
      <HomeImages />
    </main>
  );
}

export default App;