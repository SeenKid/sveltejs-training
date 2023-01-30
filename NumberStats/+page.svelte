<script>
    let numbers = [];
    let currentValue = 0;

    function addNumber() {
        numbers.push(currentValue);
        numbers = [...numbers, currentValue];

    console.log(numbers);
    }

    $: size = numbers.length;
    $: min = Math.min(...numbers);
    $: max = Math.max(...numbers);
    $: avg = numbers.reduce((x,y ) => x + y, 0) / size;
</script>

