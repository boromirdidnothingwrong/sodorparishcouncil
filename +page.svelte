<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div class="container mx-auto p-8 space-y-8">
			<h1 class="h1">Hello Skeleton</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<section>
				<a class="btn variant-filled-primary" href="https://kit.svelte.dev/">SvelteKit</a>
				<a class="btn variant-filled-secondary" href="https://tailwindcss.com/">Tailwind</a>
				<a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a>
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
