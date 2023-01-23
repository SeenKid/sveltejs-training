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
