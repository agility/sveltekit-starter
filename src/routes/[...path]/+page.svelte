<script lang="ts">
  import type { PageProps } from "./$types";
  import MainTemplate from "../../modules/agility-templates/MainTemplate.svelte";

  let { data }: PageProps = $props();
  const { page } = data;
  const { header : { title }, dynamicPageItem, templateName, seo} = page
</script>

<svelte:head>
  <title>{`${dynamicPageItem ? dynamicPageItem.fields.title + ' | ' : ''}${page.title} | ${title}`}</title>
  <meta name="description" content="{seo.metaDescription}">
  <meta name="keywords" content="{seo.metaKeywords}">
</svelte:head>

{#if templateName === "Main Template"}
  <MainTemplate {page}></MainTemplate>
{:else}
  Template not found.
{/if}