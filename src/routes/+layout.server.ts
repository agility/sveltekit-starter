import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getSiteHeader } from '$lib/agility/getSiteHeader';
import { getAgilityPage } from '$lib/agility/getAgilityPage';
import {
  NODE_ENV
} from "$env/static/private";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // Import all regular icons
library.add(fas, fab)


export const load: LayoutServerLoad = async ({ params, cookies }: {params: any, cookies:any}) => { 
 
    const isPreviewMode = cookies.get('previewMode') === 'true';
    const isPreview = NODE_ENV === 'development' && isPreviewMode;
    const path = params.path || 'home'
    
    const { page } = await getAgilityPage({path, isPreview})
    
    const siteheader = await getSiteHeader(isPreview);
    page.header = siteheader

    return {
      isPreview,
      NODE_ENV,
      page,
    };
};
