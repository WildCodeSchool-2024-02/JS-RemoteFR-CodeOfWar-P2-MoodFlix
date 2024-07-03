import { useLoaderData } from "react-router-dom";
import baseImageUrl from "../../utils/baseImageUrl";

export default function Image() {
    const { image } = useLoaderData();
    const { film } = useLoaderData();
    const random = Math.floor(Math.random()*10)
    const background = image.backdrops[random]
    return <img src={baseImageUrl+background.file_path} alt={film.title}/>;
}
