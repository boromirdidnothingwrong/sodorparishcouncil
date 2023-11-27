<script type="ts">
	/** @type {import('./$types').PageData} */
	export let data;
    let display = JSON.stringify(data);
</script>
{#each data.item.comments as piece}
<p>{piece.body}</p><br>
{/each}

<body>

</body>