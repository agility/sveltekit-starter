<script lang="ts">
  import ContentZone from "../ContentZone.svelte";
  let { page } = $props();
  const { zones, seo } = page;

  // console.log(page)
  const { MainContentZone } = zones;
</script>

<div id="MainTemplate" class="dark:bg-black max-w-screen-xl mx-auto">
  <div id="zones">
    <div id="MainContentZone">
      <ContentZone Components={MainContentZone} />
    </div>
  </div>
</div>
