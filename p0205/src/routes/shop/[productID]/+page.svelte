<script>
    export let data
    const { product } = data;
    console.log(product)
</script>

<h1>{product.title}</h1>
<p>
    <img src="{product.thumbnail}" alt="{product.title}">
    {product.description}
</p>
<p>{product.description}</p>
<p>Rating : {product.rating}</p>
