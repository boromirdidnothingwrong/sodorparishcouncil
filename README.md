# Sodor Parish Council

This is a copy of "Project Panther" simply because all the scaffolding etc is already done. 

The project uses Svelte (https://svelte.dev/) and Svelte Kit (https://kit.svelte.dev/).

Data fetching is done in +page.server.js. It requires you to make a valid OAuth2 request to https://cms-staffscc.cloud.contensis/authenticate/token, using POST, some headers, and the API client key and shared secrets. These will be set soon, possibly, and a way to use fetch to get the key and set it as a variable should also work soon.......

Global CSS goes in app.pcss (PostCSS). Pages are edited by +page.svelte, in each route. The [slug] route *should* be dynamic. Not yet tested.

Hope this makes sense as an intro. My advice is go get "Insomnia API" or whatever it's called. Forumate your OAuth2 req in there, then use that key in your GET reqs (Authorization: "Bearer $Tokenwhateveritis")
Then look at the JSON to format it when you load it into the page.

In terms of loading multiple sets of JSON, requesting and passing to page, still working on that.

Forcing a rerun of the actions.
