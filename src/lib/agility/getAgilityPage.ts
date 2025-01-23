import agility from "@agility/content-fetch";
import {
  AGILITY_LOCALES,
  AGILITY_GUID,
  AGILITY_API_PREVIEW_KEY,
  AGILITY_API_FETCH_KEY,
  NODE_ENV,
} from "$env/static/private";
import { error } from "@sveltejs/kit";

export const getAgilityPage = async ({path, isPreview}) => {

  const api = agility.getApi({
    guid: AGILITY_GUID,
    apiKey: isPreview ? AGILITY_API_PREVIEW_KEY : AGILITY_API_FETCH_KEY,
    isPreview,
  });

  const sitemap = await api.getSitemapFlat({
    channelName: "website",
    languageCode: "en-us"
  });

  const pageInSitemap = sitemap[`/${path}`];

  if (!pageInSitemap) {
    error(404, "Not found");
  }

  const page = await api.getPage({
    pageID: pageInSitemap.pageID,
    locale: "en-us"
  });


  const response = {
    slug: path,
    page,
  };

  return response;
};
