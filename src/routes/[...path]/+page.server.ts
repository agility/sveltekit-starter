import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getAgilityPage } from '$lib/agility/getAgilityPage';
import { getDynamicPageItem } from '$lib/agility/getDynamicPageItem';

export const load: PageServerLoad = async ({ params, cookies }) => {
    const pageInSitemap = await getAgilityPage({path:params.path, cookies})
    
    if(pageInSitemap.page.dynamic){
        const dynamicPageItem = await getDynamicPageItem({path: params.path, dynamic:pageInSitemap.page.dynamic, cookies})
        pageInSitemap.page.dynamicPageItem = dynamicPageItem
    
    }
    if (pageInSitemap) {
        return pageInSitemap;
    } else {
        error(404, 'Not found');
    }
};