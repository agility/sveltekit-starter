<script lang="ts">
  import ContentZone from "../ContentZone.svelte";
  let { page } = $props();
  const { zones, seo, dynamicPageItem } = page;
  const { MainContentZone } = zones;

  const websiteName = 'My SvelteKit Starter';

  let title:string;
  if(dynamicPageItem) {
    title = dynamicPageItem.fields.title + ' | ' + page.title + ' | ' + websiteName;
  } else {
    title = page.title + ' | ' + websiteName;
  }

</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div id="MainTemplate" class="dark:bg-black max-w-screen-xl mx-auto">
  <div id="zones">
    <div id="MainContentZone">
      <ContentZone Components={MainContentZone} {dynamicPageItem} />
    </div>
  </div>
</div>
