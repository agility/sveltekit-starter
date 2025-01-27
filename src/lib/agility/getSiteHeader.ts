import { AGILITY_GUID, AGILITY_API_PREVIEW_KEY, AGILITY_API_FETCH_KEY, NODE_ENV, AGILITY_LOCALES, AGILITY_SITEMAP } from '$env/static/private';
import { getApi } from '@agility/content-fetch';

export const getSiteHeader = async (isPreview:boolean) => {


    const api = getApi({
        guid: AGILITY_GUID,
        apiKey: isPreview ? AGILITY_API_PREVIEW_KEY : AGILITY_API_FETCH_KEY,
        isPreview
    });

    const header = await api.getContentList({
        referenceName: "siteheader",
        languageCode: AGILITY_LOCALES,
        take: 1
    })

    const links = await api.getSitemapNested({
        channelName: AGILITY_SITEMAP,
        languageCode: AGILITY_LOCALES
    });

    const logo = header.items[0].fields.logo;
    const title = header.items[0].fields.siteName;

    const response = {
        logo,
        title,
        links
    }

    return response;
}