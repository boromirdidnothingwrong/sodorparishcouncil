/** @type {import('./$types').LayoutLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`https://dummyjson.com/quotes`);
	const item = await res.json();
	return { item };
}