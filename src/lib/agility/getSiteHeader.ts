import { AGILITY_GUID, AGILITY_API_PREVIEW_KEY, NODE_ENV, AGILITY_LOCALES, AGILITY_SITEMAP } from '$env/static/private';
import { getApi } from '@agility/content-fetch';

export const getSiteHeader = async (cookies) => {

    const isPublishedMode = cookies.get('publishedMode', { path: '/'}) === 'true';
    const isPreview = NODE_ENV === 'development' || !isPublishedMode;
  

    const api = await getApi({
        guid: AGILITY_GUID,
        apiKey: AGILITY_API_PREVIEW_KEY,
        isPreview: NODE_ENV === 'development'
    });

    const header = await api.getContentList({
        referenceName: "siteheader",
        languageCode: AGILITY_LOCALES,
        take: 1,
        locale: AGILITY_LOCALES
    })

    const links = await api.getSitemapNested({
        channelName: AGILITY_SITEMAP,
        languageCode: AGILITY_LOCALES
    });

    const response = {
        header,
        links
    }

    return response;
}