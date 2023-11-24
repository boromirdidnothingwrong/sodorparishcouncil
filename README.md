function logMovies() {
  fetch("https://cms-staffscc.cloud.contensis.com/api/delivery/projects/testingJosh/contenttypes/blogs", { method: 'GET', // or 'POST', 'PUT', etc.
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx'}})
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
        console.log(response);
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));
}

logMovies();

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
