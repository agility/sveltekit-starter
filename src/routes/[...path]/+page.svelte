<script lang="ts">
  import type { PageProps } from "./$types";
  import MainTemplate from "../../modules/agility-templates/MainTemplate.svelte";

  let { data }: PageProps = $props();
  const  { page: {title, templateName, seo},  sitemapNode }  = data.page;
</script>

<svelte:head>
  <title>{`${sitemapNode.title} | ${title}`}</title>
  <meta name="description" content="{seo.metaDescription}">
  <meta name="keywords" content="{seo.metaKeywords}">
</svelte:head>

{#if templateName === "Main Template"}
  <MainTemplate {...data}></MainTemplate>
{:else}
  Template not found.
{/if}