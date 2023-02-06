<script>
    export let data;
    const { product } = data;
    //const {title, description, price} = data.product;
    //const title = data.title;
</script>

<h1>{product.title}</h1>
<p>{data.product.description}</p>
<p>{product.price} CHF</p>
