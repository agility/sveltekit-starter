import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getAgilityPage } from '$lib/agility/getAgilityPage';
import { getDynamicPageItem } from '$lib/agility/getDynamicPageItem';

export const prerender = true;
export const ssr = true;

export const load: PageServerLoad = async ({ params, cookies, parent }) => {
    // return the data from the layout
    return await parent()    
};