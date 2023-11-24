/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`https://dummyjson.com/comments`);
	const item = await res.json();

	return { item };
}