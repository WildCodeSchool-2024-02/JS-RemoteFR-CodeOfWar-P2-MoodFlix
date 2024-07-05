import { useLoaderData } from "react-router-dom";
import baseImageUrl from "../../utils/baseImageUrl";
import "../../styles/film/Image.css";

export default function Image() {
  const { image } = useLoaderData();
  const { film } = useLoaderData();
  const random = Math.floor(Math.random() * 5);
  const background = image.backdrops[random];
  return (
    <img
      className="imgBg"
      src={baseImageUrl + background.file_path}
      alt={film.title}
    />
  );
}
