<!--- AgilityPages is responsible for selecting the template to use on the page -->
<!-- Templates should corrispond with the page templates in Agility CMS. -->

<script>
  import MainTemplate from "./agility-templates/MainTemplate.svelte";
  let { page } = $props();
  const { templateName } = page;
</script>

{#if templateName === "Main Template"}
  <MainTemplate {page}></MainTemplate>
{:else}
  Template not found.
{/if}
