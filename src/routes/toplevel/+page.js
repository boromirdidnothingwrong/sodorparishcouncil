/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`https://dummyjson.com/quotes`);
	const item = await res.json();

	return { item };
}