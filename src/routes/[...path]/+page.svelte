<script lang="ts">
  import type { PageProps } from "./$types";
  import MainTemplate from "../../modules/agility-templates/MainTemplate.svelte";

  let { data }: PageProps = $props();
  const { page:pageData } = data;


  // console.log(page)
  const  { page, contentItem, sitemapNode }  = pageData;


  // console.log(page)
  // console.log(page)
  // console.log(sitemapNode)
  console.log(page)
  console.log('contentItem', contentItem)

  const { title, templateName, seo} = page
</script>

<svelte:head>
  <title>{`${sitemapNode.title} | ${title}`}</title>
  <meta name="description" content="{seo.metaDescription}">
  <meta name="keywords" content="{seo.metaKeywords}">
</svelte:head>

{#if templateName === "Main Template"}
  <MainTemplate page={pageData}></MainTemplate>
{:else}
  Template not found.
{/if}