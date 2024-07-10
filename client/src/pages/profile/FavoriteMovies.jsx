import Movie from "./Movie";

function FavoriteMovies() {
  const favoriteMovieTitles = [
    "8358", 
    "94329", 
    "7345", 
    "1084736"
  ];

  return (
    <section>
      <h1 className="firstTitle">Favorite Movies</h1>
      <div id="topFour">
        {favoriteMovieTitles.map((id) => (
          <Movie key={id} id={id} />
        ))}
      </div>
    </section>
  );
}

export default FavoriteMovies;
