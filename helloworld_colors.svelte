<script>
	let name = 'Yann';
	let color ="cyan";
</script>

<h1>Hello {name}!</h1>

<label for="name">Name</label>

<input id="name" name="name" bind:value={name}/>

<label for="color">color</label>
<input type="color" name="color" id="color" bind:value={color} />

<h1 style="color:{color}">
	Hello World
</h1>

<p>
	La couleur choisie est {color}
</p>
