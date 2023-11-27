<script lang="ts">
  import "../app.pcss";
  import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

  /* Returns page to top on navigate */
  import type { AfterNavigate } from '@sveltejs/kit';
  import { afterNavigate } from '$app/navigation';

afterNavigate((params: AfterNavigate) => {
    const isNewPage = params.from?.url.pathname !== params.to?.url.pathname;
    const elemPage = document.querySelector('#page');
    if (isNewPage && elemPage !== null) {
        elemPage.scrollTop = 0;
    }
});
</script>
<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="pageHeader">
    <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" >
      <svelte:fragment slot="lead">(icon)</svelte:fragment>
      (title)
      <svelte:fragment slot="trail">(actions)<LightSwitch /></svelte:fragment>
    </AppBar>
  </svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>

