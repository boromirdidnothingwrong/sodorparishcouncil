<script lang="ts" src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js">
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// For the Tabs
	let tabSet: number = 0;

	 
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
	<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
		<svelte:fragment slot="lead">Some Icon</svelte:fragment>
		Main Page
		<svelte:fragment slot="trail">(actions)</svelte:fragment>
	</AppBar>
	<TabGroup>
		<TabAnchor href="[id]/" selected={$page.url.pathname === '[id]/'}>Home</TabAnchor>
		<TabAnchor href="[id]/about" selected={$page.url.pathname === '[id]/about'}>About</TabAnchor>
	</TabGroup>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
