import { useLoaderData } from "react-router-dom";

export default function Crew () {
    const { crew } = useLoaderData()
    const cast = crew.cast.slice(0,3)
    const writers = crew.crew.filter(crewMembers => crewMembers.job === "Screenplay" ||crewMembers.job === "Writer" )
    const composers = crew.crew.filter(crewMembers => crewMembers.job === "Original Music Composer")
    const directors = crew.crew.filter(crewMembers => crewMembers.job === "Director")
    console.info(crew)
    console.info(directors)
    console.info(writers)
    console.info(composers)
    return (
        <section>
        <div className="actor">
            {cast.map((actor) => <p key={actor.id}>` {actor.name} = {actor.character} </p>)}
        </div>
        <div className="crew">
            {writers.map((writer) => <p key={writer.id}>` {writer.name} = scénariste</p>)}
            {directors.map((director) => <p key={director.id}>` {director.name} = réalisateur</p>)}
            {composers.map((composer) => <p key={composer.id}>` {composer.name} = compositeur bande son</p>)}
        </div>
        </section>
    )
}


