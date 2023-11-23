<script lang="ts" src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js">
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// For the AppRail
	let currentTile: number = 0;

	 
</script>

<!-- App Shell -->
<AppShell appRail="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- App Rail Here-->
	<AppRail>
		<svelte:fragment slot="lead">
			<AppRailAnchor href="/" >(icon)</AppRailAnchor>
		</svelte:fragment>
		<!-- --- -->
		<AppRailTile bind:group={currentTile} name="Info1" value={0} title="tile-1">
			<svelte:fragment slot="lead"><iconify-icon icon="material-symbols:map"></iconify-icon></svelte:fragment>
			<span>Tile 1<iconify-icon icon="material-symbols:map"></iconify-icon></span>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
			<svelte:fragment slot="lead">Maps</svelte:fragment>
			<span>Tile 2</span>
		</AppRailTile>
		<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			<span>Tile 3</span>
		</AppRailTile>
		<!-- --- -->
		<svelte:fragment slot="trail">
			<AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
		</svelte:fragment>
	</AppRail>
	
	<!-- Page Route Content -->
	<slot />
</AppShell>
