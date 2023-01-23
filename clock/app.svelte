<script>
	// import component 
	import Clock from "./Clock.svelte";
	
	// Variables
	let name = 'Clock with Svelte';
	let color1 = "blue";
	let color2 = "green";
	let color3 = "cyan"
</script>

<h1>{name}!</h1>

<Clock color="{color1}"/>
<!--
<Clock color="{color2}"/>
<Clock color="{color3}"/>
-->
