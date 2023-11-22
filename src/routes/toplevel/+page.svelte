<svelte:head>
    <title>Main Page</title>
</svelte:head>
<script>
   import { item } from "./+page.js"
</script>

<div>
    <h1>{item}</h1>

    {#each item.quote as quote}
  <div>
    <p>{quote}</p>
  </div>
{/each}
</div>