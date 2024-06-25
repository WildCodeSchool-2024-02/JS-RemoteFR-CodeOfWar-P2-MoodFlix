import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  // Déclarer un état pour stocker le titre du film
  const [title, setTitle] = useState("Jurassic");
  const [changeNumber, setChangeNumber] = useState(11);

  // Fonction appelée lors du clic sur le bouton
  const handleClick = () => {
    // 👇 Changer l'URL pour récupérer un film spécifique depuis The Movie DB
    const url = `https://api.themoviedb.org/3/movie/${changeNumber}?language=fr&api_key=${import.meta.env.VITE_API_KEY}`;
    
    // Effectuer une requête GET à l'API avec axios
    axios.get(url)
      .then(response => {
        // 👇 Mettre à jour l'état du titre avec le titre du film récupéré
        setTitle(response.data.title);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du film :', error);
      });
  }

  const handleChange = (event) => {
    setChangeNumber(event.target.value)
  }

  return (
    <main className="container">
      {/* Bouton pour déclencher la recherche du film */}
      <input type="button" onClick={handleClick} value="MOODFLIX 🎥"/>
      {/* Affichage du titre du film */}
      <p>Titre: {title}</p>
      {/* Exemple d'un autre input */}
      <input type="number" onChange={handleChange} defaultValue={11}/>
    </main>
  );
}

export default App;

