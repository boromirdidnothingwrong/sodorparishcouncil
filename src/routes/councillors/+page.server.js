/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const response = await fetch(`https://cms-staffscc.cloud.contensis.com/authenticate/connect/token`, { method: "POST", body: {"grant_type=client_credentials&client_id=9ce5a415-063e-4e44-91b9-5a81d109e655&client_secret=a0a2d0f5006a4343aaeaebc1a701ed3d-808309a5b8fd428a8ecb6f004fba90e6-15578e03214241588923dd7557518a01&scope=Entry_Read ContentType_Read Project_Read"}
		{ headers: {"Content-Type": "application/x-www-form-urlencoded"}, {Accept: "application/json"}});
	const item = await response.json();
	return { item };
}
