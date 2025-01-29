import type { PageServerLoad } from './$types';
import { getSitemapFlat } from '$lib/agility/getSitemapFlat';

/** @type {import('./$types').EntryGenerator} */
export async function entries() {

    const sitemap = await getSitemapFlat({isPreview: false})
    
    const routes = Object.keys(sitemap)
        .filter(key => key !== '/home') // remove the home page
        .map(key => ({ path: key.slice(1) }));

    return routes;
}

export const prerender = true;
export const ssr = true;

export const load: PageServerLoad = async ({ params, cookies, parent }) => {
    // return the data from the layout
    return await parent()    
};
