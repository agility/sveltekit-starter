import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getAgilityPage } from '$lib/agility/getAgilityPage';

export const load: PageServerLoad = async ({ params }) => {
	
    const pageInSitemap = await getAgilityPage({path:'home'})
 
    if (pageInSitemap) {
        return pageInSitemap;
    } else {
        error(404, 'Not found');
    }
};