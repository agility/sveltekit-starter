import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getSiteHeader } from '$lib/agility/getSiteHeader';
import { getAgilityPage } from '$lib/agility/getAgilityPage';
import { getDynamicPageItem } from '$lib/agility/getDynamicPageItem';
import {
  NODE_ENV,
} from "$env/static/private";


export const load: LayoutServerLoad = async ({ params, cookies }) => { 
 
    const isPublishedMode = cookies.get('publishedMode', { path: '/'}) === 'true';
    const isPreview = NODE_ENV === 'development' && !isPublishedMode;

    const path = params.path || 'home'
    
    const { page } = await getAgilityPage({path, isPreview})
    
    if(page.dynamic){
      const dynamicPageItem = await getDynamicPageItem({path: params.path, dynamic:page.dynamic, isPreview})
      page.dynamicPageItem = dynamicPageItem
    }

    const siteheader = await getSiteHeader(isPreview);
    page.header = siteheader

    return {
      isPreview,
      page,
    };
};