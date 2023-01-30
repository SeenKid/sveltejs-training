<script>
    let i = 0;
    function incrementCounter() {
        ++i;
        console.log("la valeur du compteur est de : " + i);
    }
</script>

<br/>
<h1> Compteur de clicks </h1>

<button on:click={incrementCounter}>Cliquez</button>

<p> nombre de clicks sur le bouton : {i}</p>
