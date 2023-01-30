<script>
    let i = 0;
    function incrementCounter() {
        ++i;
        console.log({i});
    }
</script>

<br/>

<button on:click={incrementCounter}>Cliquez</button>

<p> nombre de clicks sur le bouton : {i}</p>
