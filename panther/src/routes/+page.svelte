<svelte:head>
    <title>Main Page</title>
</svelte:head>
<script>
    import { onMount } from "svelte";
    const endpoint = "https://jsonplaceholder.typicode.com/posts";
    let posts = [];
  
    onMount(async function () {
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data);
    });
  
    export let name;
    posts = data;
</script>

<div class="container mx-auto p-8 space-y-8">
	<h1 class="h1">Hello Skeleton</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<section>
		<a class="btn variant-filled-primary" href="https://kit.svelte.dev/">SvelteKit</a>
		<a class="btn variant-filled-secondary" href="https://tailwindcss.com/">Tailwind</a>
		<a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a>
	</section>
    {#each posts as article}
  <div>
    <p>{article.title}</p>
  </div>
{/each}
</div>