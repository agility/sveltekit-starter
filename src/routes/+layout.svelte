<script lang="ts">
  // this imports tailwindcss styles
  import "../app.css";
  import SiteHeader from "../modules/SiteHeader.svelte";
  import SiteFooter from "../modules/SiteFooter.svelte";
  import PreviewBar from "../modules/PreviewBar.svelte";

  let { children, data } = $props();
  const { header, links } = data.siteheader;
  const { isPreview } = data;

</script>

<div class="dark:bg-black min-h-screen">
<PreviewBar {isPreview} />
<SiteHeader {header} {links} />
<main>
  {@render children()}
</main>
<SiteFooter />
</div>