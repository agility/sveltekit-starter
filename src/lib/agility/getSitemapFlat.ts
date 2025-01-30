import agility from "@agility/content-fetch";
import {
  AGILITY_GUID,
  AGILITY_API_PREVIEW_KEY,
  AGILITY_API_FETCH_KEY,
  AGILITY_SITEMAP,
  AGILITY_LOCALES,
} from "$env/static/private";

export const getSitemapFlat = async ({isPreview}: {isPreview:boolean}) => {

  const api = agility.getApi({
    guid: AGILITY_GUID,
    apiKey: isPreview ? AGILITY_API_PREVIEW_KEY : AGILITY_API_FETCH_KEY,
    isPreview,
  });

  const sitemap = await api.getSitemapFlat({
    channelName: AGILITY_SITEMAP,
    languageCode: AGILITY_LOCALES
  });



  return sitemap;
};
