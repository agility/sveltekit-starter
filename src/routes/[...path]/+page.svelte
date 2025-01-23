<script lang="ts">
  import type { PageProps } from "./$types";
  import MainTemplate from "../../modules/agility-templates/MainTemplate.svelte";

  let { data }: PageProps = $props();
  const { page } = data;
  const { header : { title }, dynamicPageItem, templateName} = page
  
</script>

<svelte:head>
  <title>{`${dynamicPageItem ? dynamicPageItem.fields.title + ' | ' : ''}${page.title} | ${title}`}</title>
</svelte:head>

{#if templateName === "Main Template"}
  <MainTemplate {page}></MainTemplate>
{:else}
  Template not found.
{/if}