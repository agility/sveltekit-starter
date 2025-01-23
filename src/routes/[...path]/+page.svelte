<script lang="ts">
  import type { PageProps } from "./$types";
  import MainTemplate from "../../modules/agility-templates/MainTemplate.svelte";

  let { data }: PageProps = $props();
  const { page } = data;
  const { templateName } = page;

</script>

{#if templateName === "Main Template"}
  <MainTemplate {page}></MainTemplate>
{:else}
  Template not found.
{/if}