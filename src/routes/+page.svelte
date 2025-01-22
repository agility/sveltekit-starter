<script lang="ts">
  import AgilityPages from "../modules/AgilityPages.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  const { page } = data;
</script>

<AgilityPages {page} />


