import {SlugService} from "$lib" // 404 expected; 404 actual
// import {SlugService} from "services" // 404 expected; 500 actual

const slugService = new SlugService()
export const load = (async (event) => {
	const { params } = event
	const { slug } = params

	return await slugService.fetchBySlug(slug)
});
