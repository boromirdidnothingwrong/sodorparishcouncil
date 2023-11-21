import { AppShell } from '@skeletonlabs/skeleton';

<AppShell>
	<svelte:fragment slot="header">Header</svelte:fragment>
	<!-- (sidebarLeft) -->
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
