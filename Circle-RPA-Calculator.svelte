<script>
  // variables
	let titleColor = "red";
	let radius = 2.0;
	const pi = 3.1415;
	$: area = pi * radius * radius;
	$: perimeter = 2 * pi * radius;
</script>

<h1 style="color:{titleColor}">Circle RPA calculator</h1>

<label for="radius">Rayon</label>
<input id="radius" name="radius" bind:value={radius} type="number" min=0.1 max=5 step=0.1 />

<p>
	Le rayon vaut {radius}. <br />
	Le périmètre vaut {perimeter.toFixed(2)}. <br /> 
	L'aire vaut {area.toFixed(4)}.
</p>
