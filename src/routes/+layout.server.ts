import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { getSiteHeader } from '$lib/agility/getSiteHeader';
import {
  NODE_ENV,
} from "$env/static/private";

export const prerender = true;
export const ssr = true;

export const load: LayoutServerLoad = async ({ params, cookies }) => { 
    const siteheader = await getSiteHeader(cookies);
   
    const isPublishedMode = cookies.get('publishedMode', { path: '/'}) === 'true';
    const isPreview = NODE_ENV === 'development' && !isPublishedMode;

    return {
      siteheader,
      isPreview
    };
};