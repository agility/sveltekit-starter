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

export const getAgilityPage = async ({path, isPreview}: {path:string, isPreview:boolean}) => {

  const api = agility.getApi({
    guid: AGILITY_GUID,
    apiKey: isPreview ? AGILITY_API_PREVIEW_KEY : AGILITY_API_FETCH_KEY,
    isPreview,
  });

  const page = await api.getPageByPath({
    pagePath: `/${path}`,
    locale: AGILITY_LOCALES,
    channelName: AGILITY_SITEMAP,
    contentLinkDepth: 4,
  });



  if(!page){
    error(404, 'Page not found.')
  }


  console.log(page)

  console.log(page.page.zones.MainContentZone)
  const response = {
    slug: page.sitemapNode.path,
    page: page
  };

  return response;
};
