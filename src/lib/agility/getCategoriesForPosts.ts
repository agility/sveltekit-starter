import agility from "@agility/content-fetch";
import {
  AGILITY_LOCALES,
  AGILITY_GUID,
  AGILITY_API_PREVIEW_KEY,
  AGILITY_API_FETCH_KEY,
} from "$env/static/private";


export const getCategoriesForPosts = async (page: any, isPreview: boolean) => {
    const api = agility.getApi({
      guid: AGILITY_GUID,
      apiKey: isPreview ? AGILITY_API_PREVIEW_KEY : AGILITY_API_FETCH_KEY,
      isPreview,
    });
  
    // posts will come from zones
    const zones = page.zones;
    const categoryPromises:any = [];
  
    Object.keys(zones).forEach((zoneName) => {
      const modules = zones[zoneName];
      modules.forEach((module: any) => {

        if (module.module === "PostsListing") {
          module?.item?.fields?.posts?.forEach((post: any) => {
            const { contentid } = post.fields.category;
            const categoryPromise = api
              .getContentItem({
                contentID: contentid,
                languageCode: AGILITY_LOCALES,
                locale: AGILITY_LOCALES,
              })
              .then((fullCategory) => {
                post.fields.category = fullCategory;
              });
            categoryPromises.push(categoryPromise);
          });
        }
  
        // if this is a featured posts module
        if (module.module === "FeaturedPost") {
          const featured = module.item.fields.featuredPost;
          const { contentid } = featured.fields.category;
          const categoryPromise = api
            .getContentItem({
              contentID: contentid,
              languageCode: AGILITY_LOCALES,
              locale: AGILITY_LOCALES,
            })
            .then((fullCategory) => {
              featured.fields.category = fullCategory;
            });
          categoryPromises.push(categoryPromise);
        }
      });
    });
  
    // wait until all the categories are available
    await Promise.all(categoryPromises);
  
    return page;
  };