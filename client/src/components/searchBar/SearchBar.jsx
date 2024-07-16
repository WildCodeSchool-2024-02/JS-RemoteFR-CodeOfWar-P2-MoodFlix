import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { moodTable } from "../../services/getMoviesByMood";
import Suggestion from "./Suggestion";
import "../../styles/SearchBar.css";
import findSimilarMood from "../../utils/findSimilarMood";

const suggestionsList = Object.keys(moodTable);

export default function SearchBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);

    if (newSearch.length > 0) {
      const filteredSuggestions = suggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(newSearch.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyChange = (event) => {
    if (event.key === "Enter") navigate(`/mood/${findSimilarMood(search)}`);
  };

  return (
    <section className="search-bar">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyChange}
        placeholder="Search..."
      />
      {suggestions.length ? (
        <ul>
          {suggestions.map((suggestion) => (
            <Suggestion key={suggestion}>{suggestion}</Suggestion>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
