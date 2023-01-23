<script>
	export let color = "blue";
	import { onMount} from 'svelte';
	
	// variables
	const ms = 1000;
	let time = new Date();
	$: hours = time.getHours();
	$: minutes = time.getMinutes();
	$: seconds = time.getSeconds();
	
	onMount(() => {
		const interval = setInterval (() => {
			time = new Date();
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});
	
</script>

<p style="color:{color}">
	{hours}:{minutes}:{seconds}
</p>
