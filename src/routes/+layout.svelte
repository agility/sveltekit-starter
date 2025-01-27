<script lang="ts">
  import "../tailwind.css";
  import SiteHeader from "../modules/SiteHeader.svelte";
  import SiteFooter from "../modules/SiteFooter.svelte";
  import PreviewBar from "../modules/PreviewBar.svelte";

  let { children, data } = $props();
  
  const { header } = data.page;
  const { isPreview, showPreviewBar, NODE_ENV } = data;

</script>

<div class="light dark:bg-black min-h-screen">
  
  <!-- You may want to keep the preview around for your staging
  website. -->

  {#if (NODE_ENV === 'production' && showPreviewBar || NODE_ENV === 'development')}
    <PreviewBar {isPreview} />
  {/if}
  <SiteHeader {header} />
  <main>
    {@render children()}
  </main>
  <SiteFooter />
</div>
