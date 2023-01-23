<script>
	let name = 'Yann';
	let color ="cyan";
	let isUpper = false;
	$: upper = "Hello "+name +"!";
</script>

<h1>Hello {name}!</h1>

<label for="name">Name</label>

<input id="name" name="name" bind:value={name}/>

<label for="color">color</label>
<input type="color" name="color" id="color" bind:value={color} />

<br>
<input type="checkbox" name="upper" id="upper" bind:checked={isUpper}/> Uppercase

<h1 style="color:{color}">
	{upper}
</h1>

<p>
	La couleur choisie est {color}, la case à cocher est sur {isUpper}
</p>
