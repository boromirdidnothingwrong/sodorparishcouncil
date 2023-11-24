<script>
  import "../app.pcss";
  import { AppShell, AppBar } from '@skeletonlabs/skeleton';
    
  /*Initialise the Contensis Delivery API*/
  const { Client } = require("contensis-delivery-api");
  const ContensisClient = Client.create({
    rootUrl:"staffscc",
    accessToken: "access_token",
    projectId: "testingJosh",
  })

</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
    <AppBar>Hold for Title</AppBar>
  </svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>

<style>
.container {
  width: 400px;
  height: 300px;
  background-color: #ccc;
  position: absolute;
  /*it can be fixed too*/
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  /*this to solve "the content will not be cut when the window is smaller than the content": */
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
}

</style>