<svelte:head>
    <title>cms</title>
</svelte:head>
<script>
	/** @type {import('../$types').PageData} */
	 export let data;
   </script>

<div class="container mx-auto p-8 space-y-8">
	{#each data.item.quotes as quote}

  <div>
    <p>{ quote.quote }</p>
    <p>{ quote.author}</p>
    <br />
  </div>
{/each}
</div>

