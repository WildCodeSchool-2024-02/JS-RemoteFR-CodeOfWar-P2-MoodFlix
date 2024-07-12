import tmdb from "./tmdb"

export function fetchDetails(id) {
    return tmdb.get(`/person/${id}`).then(response => response.data);
}

export function fetchMovieCredits(id) {
    return tmdb.get(`/person/${id}/movie_credits`).then(response => response.data);
}

export default function fetchCast(id) {
    return Promise.all([fetchDetails(id), fetchMovieCredits(id)]).then((response) => {
        const [responseDetails, responseMovieCredits] = response;
        return {
            cast: responseDetails,
            credit: responseMovieCredits
        }
    })

}