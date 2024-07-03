import { useLoaderData } from "react-router-dom";

export default function Synopsis () {
    const { film } = useLoaderData();
    return ( 
        <div>{film.overview}</div>
    )
}
