<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	
	
   /** @type {import('./$types').LayoutData} */
	export let data;
  
   

</script>
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div class="container mx-auto p-8 space-y-8">
			<section>
				Can I put text here?<br	/>
				{#each data.item.quotes as quote}

  <div>
    <p>{ quote.quote }</p>
    <p>{ quote.author}</p>
    <br />
  </div>
{/each}
				<a href="/toplevel">Top Level</a>	
				<a href="/maps">Maps</a>
				<a href="/about">About</a>

			</section>
		</div>
	</div>
</div>

<style lang="postcss">
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
