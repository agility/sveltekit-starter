<script lang="ts">

  import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import { onMount } from 'svelte';

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
  class={`p-2 flex flex-row justify-between mb-4 items-center bg-black dark:bg-white
  `}
>
  <div class="flex-1">
   

    <div class="flex items-center">
      <div>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-yellow-500"
        >
          <path
        d="M17.5877 23.9094H7.07984L15 10.1805L22.9208 23.9094L25.2311 28H30L15 2L0 28H19.4292L17.5877 23.9094Z"
          ></path>
        </svg>
      </div>
      <div class="mr-4 ml-4">
        <a href="https://agilitycms.com/docs" target="_blank" rel="noreferrer" title="Help Center">
          <div class="flex items-center">
            <FontAwesomeIcon icon={faInfoCircle}  class="text-white dark:text-black mr-2 w-[17px]"  />
            <!-- <FaInfoCircle class="text-2xl mr-2" /> -->
            <p class="hidden md:block text-sm text-white dark:text-black">Agility Docs</p>
          </div>
        </a>
      </div>
      <div>
        <a
          href="https://github.com/agility/sveltekit-starter"
          target="_blank"
          rel="noreferrer"
          title="View on GitHub"
          class="text-2xl"
        >
          <div class="flex items-center">
            <FontAwesomeIcon icon={faGithub} class="text-white dark:text-black mr-2 w-[17px]"  />
            <p class="hidden md:block text-sm text-white dark:text-black">View on GitHub</p>
          </div>
        </a>
      </div>
    </div>

  </div>
  <div class="flex-1 text-center text-sm font-light text-white dark:text-black">
    {#if isPreview}
      Viewing in Preview Mode
    {:else}
      Viewing in Published Mode
    {/if}
  </div>
  <div class="flex-1 text-right">
    <button on:click={toggle} class="bg-white dark:bg-black p-2 px-4 text-black dark:text-white rounded">
      {isPreview ? "View Published" : "View in Preview Mode"}
    </button>
  </div>
</div>
