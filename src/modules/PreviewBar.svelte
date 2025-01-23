<script lang="ts">
  export let isPreview: boolean;

  async function toggle() {
    isPreview = !isPreview;
    const toggle = await fetch("/toggle-cookies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    });
    window.location.reload();
  }
</script>

<div
  class={`p-2 flex flex-row justify-between mb-4 items-center
  ${isPreview ? "bg-yellow-500" : "bg-green-500"}
  `}
>
  <div class="flex-1">
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        d="M17.5877 23.9094H7.07984L15 10.1805L22.9208 23.9094L25.2311 28H30L15 2L0 28H19.4292L17.5877 23.9094Z"
        fill={isPreview ? "#FFFFFF" : "#000000"}
      ></path></svg
    >
  </div>
  <div class="flex-1 text-center font-light">
    {#if isPreview}
      Viewing in Preview Mode
    {:else}
      Viewing in Published Mode
    {/if}
  </div>
  <div class="flex-1 text-right">
    <button on:click={toggle} class="bg-black p-2 px-4 text-white rounded">
      {isPreview ? "View Published" : "View in Preview Mode"}
    </button>
  </div>
</div>
