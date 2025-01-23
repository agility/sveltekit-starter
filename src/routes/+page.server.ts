import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getAgilityPage } from '$lib/agility/getAgilityPage';

export const prerender = true;
export const ssr = true;

export const load: PageServerLoad = async ({ params, cookies, parent }) => {
    // return the data from the layout
	return await parent()
};