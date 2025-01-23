import { AGILITY_GUID, AGILITY_API_PREVIEW_KEY, AGILITY_API_FETCH_KEY, NODE_ENV, AGILITY_LOCALES, AGILITY_SITEMAP } from '$env/static/private';
import { getApi } from '@agility/content-fetch';

export const getDynamicPageItem = async ({path, dynamic, isPreview}) => {

    const api = await getApi({
        guid: AGILITY_GUID,
        apiKey: isPreview ? AGILITY_API_PREVIEW_KEY : AGILITY_API_FETCH_KEY,
        isPreview: isPreview
    });

    const dynamicContent = await api.getContentList({
        referenceName: dynamic.referenceName,
        languageCode: AGILITY_LOCALES,
        locale: AGILITY_LOCALES
    })

    const newPath = path.split('/').pop();
    const dynamicPageItem = dynamicContent.items.find(item => item.fields.slug === newPath);
   
    return dynamicPageItem;
}