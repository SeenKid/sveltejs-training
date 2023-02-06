# Notes modules M294 - Svelte JS

## citations #THISCHLIST
- les cobéyes (23.01.2023)

## Informations importantes

[GitHub SvelteJS du cours](https://github.com/SeenKid/sveltejs-training) <br/>
[Documentation Svelte](https://svelte.dev/docs#) <br/>

## ***COURS DU 23.01.2023***
```js
<script>
	// Variables 
	let name = 'Yann';
	let color ="cyan";
	let isUpper = false;
	$: upper = "Hello "+name +"!";
	$: txtFinal = isUpper ? upper.toUpperCase() : upper;
</script>

<h1>Hello {name}!</h1>

<label for="name">Name</label>

<input id="name" name="name" bind:value={name}/>

<label for="color">color</label>
<input type="color" name="color" id="color" bind:value={color} />

<br>
<!-- checkbox to enable uppercases -->
<input type="checkbox" name="upper" id="upper" bind:checked={isUpper}/> Uppercase

<!-- h1 modifying -->
<h1 style="color:{color}">
	{isUpper ? upper.toUpperCase() : upper}
</h1>

<!-- same shit but with variable -->
<h1 style="color:{color}">
	{txtFinal}
</h1>

<!-- say the choosed color & say if uppercase is enabled -->
<p>
	La couleur choisie est {color}, la case à cocher est sur {isUpper}
</p>
```

>let : private 

>var : public

<br />

### <ins>Svelte types & things</ins>

```type="color"``` = mettre un selecteur de couleur

```bind:value={name}``` = modifier une variable

> on peux mettre und bind d'une value pour assigner une valeur à l'élément de la page

<br />

### <ins>Reactive statements</ins>

> une variable qui se modifie en fonction d'une autre variable

```js
$: area = pi * radius * radius;
$: perimeter = 2 * pi * radius;
```

### <ins>Components</ins>

> importer un composant peut se révéler utile pour modifier le contenu d'une page par exemple. Tout se trouve dans un autre fichier.

```js 
import Clock from "./Clock.svelte";
```

use the component : 
```html
<Clock />
```

### <ins>Interval</ins>

> Le code suivant s'exécute chaque 1000ms soit chaque secondes

```js
	// imports and exports for components
	export let color = "blue";
	
	// variables
	let time = new Date();
	$: hours = time.getHours();
	$: minutes = time.getMinutes();
	$: seconds = time.getSeconds();
	
	// each 1s
	setInterval(() => {
		time = new Date().toLocaleTimeString();
	}, 1000);
```

> Le onMount comme sur la doc n'est pas nécessaire

### <ins>Routage</ins>

```/routes/clock/+page.svelte```
> il suffit de créer un dossier dans routes avec un fichier +page.svelte à l'intérieur. Puis de modifier l'url avec /clock par exemple.

---

## ***COURS DU 30.01.2023***

notes anexes : petite feuille #1

> app.html = ne pas toucher, d'autre pages permettent de modifier le contenu d'un div qui se trouve dans le body, qui lui même est dans le app.html.

<br/>

javascript
```js
    let i = 0;
    function incrementCounter() {
        ++i;
        console.log("la valeur du compteur est de : " + i);
    }
```
html
```html
<br/>

<h1> Compteur de clicks </h1>

<button on:click={incrementCounter}>Cliquez</button>

<p> nombre de clicks sur le bouton : {i}</p>
```

---

$lib clock folder

```js
<script>
    export let color = "blue";
    let time = "";
    setInterval(() => {
        time = new Date().toLocaleTimeString();
    }, 1000);
</script>

<p style="color:{color}">Il est {time}</p>

<style>
p {
    font-family: 'Courier New', Courier, monospace;
    font-size: 40px;
}
</style>
```

> if / else with svelte

```js
	{#if} 
	<h1> hello world </h1>
	{:else}
	<h1> hellou werld </h1>
	{/if}
```

> exemple >

JAVSCRIPT 

```js
{#if size > 0} // size is a variable defined higher in the page.
	// some html code
{:else}
	// another html code
{/if }
```

---

