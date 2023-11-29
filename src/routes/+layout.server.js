import { Client } from 'contensis-delivery-api';

/** @type {import('./$types').LayoutServerLoad} */

export async function load() {
	const ContensisClient = Client.create({
		rootUrl: "https://cms-staffscc.cloud.contensis.com",
		accessToken: "XVCYiSuyUhFLluLrcETEmDLTRomYhLMsXwDYcDGB7yCNg2nx",
		projectId: "sodorparishcouncil",
	  });
	  const data = ContensisClient.contentTypes.get('councillor').then(function (contentType) {});
	  return { data };
	}	  
