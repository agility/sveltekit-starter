<script lang="ts">
  import ContentZone from "../ContentZone.svelte";
  let data = $props();
</script>

<div id="MainTemplate" class="dark:bg-black max-w-screen-xl mx-auto">
  <div id="zones">
    <div id="MainContentZone">
      <ContentZone zone="MainContentZone" {data}/>
    </div>
  </div>
</div>
