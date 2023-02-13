<script>
    export let data;
    const { products, users } = data;
    console.log(users);
</script>

<h1>Mes produits</h1>
{#each products as product}
     <h2><a href="/shop/{product.id}">{product.title}</a></h2>
     <p>{product.description}</p>
     <p>{product.price} CHF</p>
{/each}

<h1>Mes utilisateurs</h1>
{#each users as user}
     <h2>{user.firstName} {user.lastName}</h2>
     <p>{user.email}</p>
{/each}