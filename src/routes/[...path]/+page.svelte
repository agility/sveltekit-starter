<script lang="ts">
  import type { PageProps } from "./$types";
  import AgilityPages from "../../modules/AgilityPages.svelte";

  let { data }: PageProps = $props();
  const { page } = data;
</script>

<AgilityPages {page} />