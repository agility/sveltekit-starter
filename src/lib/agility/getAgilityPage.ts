import agility from "@agility/content-fetch";
import {
  AGILITY_LOCALES,
  AGILITY_GUID,
  AGILITY_API_PREVIEW_KEY,
  AGILITY_API_FETCH_KEY,
  AGILITY_SITEMAP,
  NODE_ENV,
} from "$env/static/private";
import { error } from "@sveltejs/kit";
import { getDynamicPageItem } from '$lib/agility/getDynamicPageItem';
import { getCategoriesForPosts } from '$lib/agility/getCategoriesForPosts';

export const getAgilityPage = async ({path, isPreview}: {path:string, isPreview:boolean}) => {

  const api = agility.getApi({
    guid: AGILITY_GUID,
    apiKey: isPreview ? AGILITY_API_PREVIEW_KEY : AGILITY_API_FETCH_KEY,
    isPreview,
  });

  const sitemap = await api.getSitemapFlat({
    channelName: AGILITY_SITEMAP,
    languageCode: AGILITY_LOCALES
  });

  const pageInSitemap = sitemap[`/${path}`];

  if (!pageInSitemap) {
    error(404, "Not found");
  }

  const page = await api.getPage({
    pageID: pageInSitemap.pageID,
    locale: "en-us"
  });


  if(page.dynamic){
    const dynamicPageItem = await getDynamicPageItem({path, dynamic:page.dynamic, isPreview})
    page.dynamicPageItem = dynamicPageItem
  }

  const getCategories = await getCategoriesForPosts(page, isPreview)
  page.zones = getCategories.zones


  const response = {
    slug: path,
    page,
  };

  return response;
};
