<script lang="ts">
  import "../tailwind.css";
  import SiteHeader from "../modules/SiteHeader.svelte";
  import SiteFooter from "../modules/SiteFooter.svelte";
  import PreviewBar from "../modules/PreviewBar.svelte";

  let { children, data } = $props();
  
  const { header } = data.page;
  const { isPreview } = data;

</script>

<div class="light dark:bg-black min-h-screen">
  <PreviewBar {isPreview} />
  <SiteHeader {header} />
  <main>
    {@render children()}
  </main>
  <SiteFooter />
</div>
