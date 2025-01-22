<script lang="ts">
  import ContentZone from "../ContentZone.svelte";
  let { page } = $props();
  const { zones } = page;
  const { MainContentZone} = zones;
</script>

<div id="MainTemplate" class="max-w-2xl mx-auto bg-green-500">

  <h1>{page.title}</h1>
  <hr />
  <div id="zones">

    <div id="MainContentZone">
      <ContentZone Components={MainContentZone} />
    </div>

  </div>
</div>
