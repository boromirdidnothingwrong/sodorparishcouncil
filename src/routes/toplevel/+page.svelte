<svelte:head>
    <title>Main Page</title>
</svelte:head>
<script>
   /** @type {import('./$types').PageData} */
	export let data;
  </script>

<div>
    <h1>Quotes</h1>

    {#each data.item.quotes as quote}

  <div>
    <p>{ quote.quote }</p>
    <p>{ quote.author}</p>
    <br />
  </div>
{/each}
</div>