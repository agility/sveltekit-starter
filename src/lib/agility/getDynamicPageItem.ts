import { AGILITY_GUID, AGILITY_API_PREVIEW_KEY, NODE_ENV, AGILITY_LOCALES, AGILITY_SITEMAP } from '$env/static/private';
import { getApi } from '@agility/content-fetch';

export const getDynamicPageItem = async ({path, dynamic, cookies}) => {

    const isPublishedMode = cookies.get('publishedMode', { path: '/'}) === 'true';
    const isPreview = NODE_ENV === 'development' || !isPublishedMode;

    const api = await getApi({
        guid: AGILITY_GUID,
        apiKey: AGILITY_API_PREVIEW_KEY,
        isPreview: NODE_ENV === 'development'
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