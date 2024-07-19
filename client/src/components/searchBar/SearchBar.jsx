import { useState } from "react";
import { moodTable } from "../../services/getMoviesByMood";
import Suggestion from "./Suggestion";
import findSimilarMood from "../../utils/findSimilarMood";
import "../../styles/SearchBar.css";

const suggestionsList = Object.keys(moodTable);

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [oldSearch, setOldSearch] = useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    setOldSearch(newSearch);

    if (newSearch.length > 0) {
      const filteredSuggestions = suggestionsList.filter((suggestion) =>
        suggestion.toLowerCase().includes(newSearch.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setSelectedSuggestionIndex(-1);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyChange = (event) => {
    if (event.key === "ArrowDown") {
      setSelectedSuggestionIndex((prevIndex) =>
        Math.min(prevIndex + 1, suggestions.length - 1)
      );
      setSearch(suggestions[selectedSuggestionIndex + 1]);
    } else if (event.key === "ArrowUp") {
      setSelectedSuggestionIndex((prevIndex) => {
        const newIndex = Math.max(prevIndex - 1, -1);
        setSearch(
          newIndex === -1 ? oldSearch : suggestions[selectedSuggestionIndex - 1]
        );
        return newIndex;
      });
    } else if (event.key === "Enter") {
      window.location.href = `/mood/${findSimilarMood(search)}`;
    }
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
          {suggestions.map((suggestion, index) => (
            <Suggestion
              key={suggestion}
              className={index === selectedSuggestionIndex ? "selected" : ""}
            >
              {suggestion}
            </Suggestion>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
