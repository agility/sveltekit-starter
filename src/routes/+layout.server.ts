import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getSiteHeader } from '$lib/agility/getSiteHeader';
import { getAgilityPage } from '$lib/agility/getAgilityPage';
import { getDynamicPageItem } from '$lib/agility/getDynamicPageItem';
import {
  NODE_ENV,
  AGILITY_SHOW_PREVIEW_BAR,
} from "$env/static/private";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // Import all regular icons
library.add(fas, fab)


export const prerender = true;
export const ssr = true;

export const load: LayoutServerLoad = async ({ params, cookies }) => { 
 

  
    const isPublishedMode = cookies.get('publishedMode', { path: '/'}) === 'true';
    const isPreview = NODE_ENV === 'development' && !isPublishedMode;
    const showPreviewBar = AGILITY_SHOW_PREVIEW_BAR === 'true';
    const path = params.path || 'home'
    
    const { page } = await getAgilityPage({path, isPreview})
    
    if(page.dynamic){
      const dynamicPageItem = await getDynamicPageItem({path: params.path, dynamic:page.dynamic, isPreview})
      page.dynamicPageItem = dynamicPageItem
    }

    // featured post and posts listing need this
    // const withCategories = await getCategoriesForPosts(page, isPreview)

    // we need to augment the data with
    // the categories for the posts


    // we need a way to look up categories for
    // featured posts and posts listings

    // const zones = page.zones
    // Object.keys(zones).forEach(zoneName => { 
    //   const modules = zones[zoneName]
    //   modules.forEach(module => {
    //     if(module.module === "PostsListing"){
    //       module?.item?.fields?.posts?.map(post => {
    //         const category = post.fields.category
    //         // console.log(category)
    //       })
    //     }

    //     if(module.module === "Featured Posts"){
    //     }
    //   })
    // })


    const siteheader = await getSiteHeader(isPreview);
    page.header = siteheader

    return {
      isPreview,
      showPreviewBar,
      NODE_ENV,
      page,
    };
};