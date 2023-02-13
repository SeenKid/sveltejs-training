<script>
    export let data
    const { movies } = data

    //console.log(movies)
</script>
<h1>Movie</h1>
{#each movies as movie}
     <h1>{movie.title}</h1>
     <p>{movie.overview}</p>
{/each}