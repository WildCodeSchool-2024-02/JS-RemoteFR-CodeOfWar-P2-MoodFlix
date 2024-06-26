import "./styles/Global.css";
import HomeImages from "./components/HomeImages";
import "./App.css";
import HomeCard from "./components/HomeCard";
import "./styles/HomeCard.css";

const cardsData = [
  {
    title: "📝 Keep a diary",
    content: "of your film watching and keep an organised data",
  },
  {
    title: "✍🏻 Write Reviews",
    content: "write and share reviews of the last movies you've watched",
  },
  {
    title: "👁 Keep Track",
    content: "of every film you've ever watched",
  },
  {
    title: "👩‍👩‍👧‍👧 Join the Community",
    content: "and meet people who loves movies as much as you do!",
  },
];

function App() {
  return (
    <main className="container">
      <HomeImages />
      <HomeCard title={cardsData[0].title} content={cardsData[0].content} />
    </main>
  );
}

export default App;
