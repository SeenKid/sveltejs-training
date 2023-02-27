<script>
	import { each } from "svelte/internal";

    export let data;
    const { articles } = data;

    console.log(articles);
</script>

<h1>Mes Articles </h1>

<form action="?/createArticle" method="POST">
    <h3>Créer un article</h3>
    <label for="title">Title</label>
    <input type="text" name="title" id="title">
    <label for="content">Content</label>
    <textarea name="content" id="content" cols="30" rows="5"></textarea>
    <button type="submit">Créer un article</button>
    <hr><hr><hr>
</form>


{#each articles as article}
    <h2> <a href="/articles/{article.id}">{article.title}</a></h2>
    <form action="?/deleteArticle&id={article.id}" method="POST">
        <button type="submit">supprimer</button>
    </form>
    <hr><hr><hr>
{:else}
    <p>Aucun article disponible</p>    
{/each}
