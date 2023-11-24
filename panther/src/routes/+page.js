/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`/api/items/${params}`);
	const item = await res.json();

	return { item };
}

  


/** https://cms-staffscc.cloud.contensis.com/api/delivery/projects/testingJosh/contenttypes/blogs 
 * 
 * function logMovies() { fetch("https://cms-staffscc.cloud.contensis.com/api/delivery/projects/testingJosh/contenttypes/blogs", { method: 'GET', // or 'POST', 'PUT', etc. headers: { 'Content-Type': 'application/json', 'Authorization': 'XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx'}}) .then(response => { if (!response.ok) { throw new Error(Network response was not ok: ${response.status}); console.log(response); } return response.json(); }) .then(data => console.log(data)) .catch(error => console.error("Error fetching data:", error)); }

logMovies();
 * 
*/