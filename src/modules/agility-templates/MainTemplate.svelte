<script lang="ts">
  import ContentZone from "../ContentZone.svelte";
  let { page } = $props();
  const { zones } = page;
  const { MainContentZone } = zones;
</script>

<svelte:head>
  <title>{page.title}</title>
</svelte:head>

<div id="MainTemplate" class="dark:bg-black max-w-screen-xl mx-auto">

  <!-- <h1>{page.title}</h1> -->

  <div id="zones">
    <div id="MainContentZone">
      <ContentZone Components={MainContentZone} />
    </div>
  </div>
</div>
