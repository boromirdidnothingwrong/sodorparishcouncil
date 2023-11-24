/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	return {
		post: {
			title: `Title for ${params} goes here`,
			content: `Content for ${params} goes here`
		},
        
	};
    console.log(params);
}
