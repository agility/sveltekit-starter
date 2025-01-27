import agility from "@agility/content-fetch";
import {
  AGILITY_LOCALES,
  AGILITY_SITEMAP,
  AGILITY_GUID,
  AGILITY_API_PREVIEW_KEY,
  AGILITY_API_FETCH_KEY,
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
    channelName: AGILITY_SITEMAP,
    locale: AGILITY_LOCALES 
  })

  if(!page) {
    error(404, "Not found");
  }

  const response = {
    slug: path,
    page: page.page,
  };

  return response;
};
