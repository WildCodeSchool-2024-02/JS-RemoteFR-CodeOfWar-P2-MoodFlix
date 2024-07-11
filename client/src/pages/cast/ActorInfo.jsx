import { useLoaderData } from "react-router-dom";

export default function ActorInfo() {
  const { cast, credit } = useLoaderData();
  let gender;
  if (cast.gender === 1) {
    gender = "Femme";
  } else if (cast.gender === 2) {
    gender = "Homme";
  } else if (cast.gender === 3) {
    gender = "Non-Binaire";
  } else {
    gender = "";
  }

  return (
    <aside>
      {cast.name}
      {gender}
      {credit.cast.length}
      {cast.birthday}
      {cast.place_of_birth}
      {cast.deathday ? <p>{cast.deathday}</p> : null}
    </aside>
  );
}
