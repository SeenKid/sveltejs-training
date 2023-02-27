<script>
    export let data;
    const {article} = data;
    //console.log(article);
</script>

<form action="?/updateArticle" method="POST">
    <h3>Editing : {article.title}</h3>
    <label for="title">Title</label>
    <input type="text" name="title" id="title" value={article.title}>
    <label for="content">Content</label>
    <textarea name="content" id="content" cols="30" rows="5" value={article.content}></textarea>
    <button type="submit">Valider</button>
</form>