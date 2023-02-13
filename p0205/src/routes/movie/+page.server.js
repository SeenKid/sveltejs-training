import { API_KEY } from "$env/static/private";

//console.log(API_KEY)

export async function load({fetch}) {
    const fetchMovies = async () => {
//        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
        const res = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key='+API_KEY)
        const data = await res.json()
        return data.results
    }

    return {
        movies: fetchMovies()
    }
}