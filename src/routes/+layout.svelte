<script lang="ts" src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js">
	import "../app.pcss";
    import '../app.postcss';
    import { AppShell, AppBar, AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';

    import { page } from '$app/stores';

    // Floating UI for Popups
    import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
    import { storePopup } from '@skeletonlabs/skeleton';
    import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';

    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });


    /** @type {import('./$types').PageData} */
    export let data;

    // For the Tabs
    let tabSet: number = 0;
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
	<AppBar gridcolumns="grid-cols-3" slotdefault="place-self-center" slottrail="place-content-end">
		<svelte:fragment slot="lead">Some Icon</svelte:fragment>
		Page Title Placeholder
		<!-- Josh needs to figure out how the hell to dynamically load the page title. Nightmare for some reason!-->
		<svelte:fragment slot="trail">(actions)</svelte:fragment>
	</AppBar>
	</svelte:fragment>
	<TabGroup>
		<TabAnchor href="/" selected="{$page.url.pathname===''}"> Home </TabAnchor>
	</TabGroup>
	
	

	<svelte:fragment slot="sidebarLeft"></svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	
	<slot></slot>
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
