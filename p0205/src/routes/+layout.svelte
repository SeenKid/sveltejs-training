<nav>
    <a href="/">Home</a>
    <a href="/shop">Shop</a>
    <a href="/movie">Movies</a>
</nav>

<slot />

<style>
    nav {
        background-color: midnightblue;
        padding: 10px;
    }
    nav a {
        color:white;
        padding: 0 10px;
        text-decoration: none;
    }
    nav a:hover {
        text-decoration: underline;
    }
</style>