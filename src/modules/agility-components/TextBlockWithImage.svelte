<script lang="ts">
    export let item: any;
    const { fields: { primaryButton, image, imagePosition, slug, tagline, title, content} } = item;
</script>
<div class="relative ">
    <div class="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
      <div
        class="md:w-6/12 flex-shrink-0 relative "
        data-agility-field="image"
      >
        {#if primaryButton}
          <a href={primaryButton.href} class="relative">
            <img
              src={image.url}
              class="rounded-lg object-cover object-center"
              alt={image.label}
              
            />
          </a>
        {:else}
          <img
            src={image.url}
            class="rounded-lg object-cover object-center"
            alt={image.label}
            
          />
        {/if}
      </div>
      <div
        class={`md:w-6/12 mt-16 md:mt-0 ${
          imagePosition != "right"
            ? `md:ml-12 lg:ml-16 md:order-last`
            : `md:mr-12 lg:mr-16 md:order-first`
        }`}
      >
        <div class="g:py-8 text-center md:text-left">
          <a href={slug} class="" >
          {#if tagline}
            <div class="font-bold dark:text-yellow-500  text-primary-500 text-sm text-center md:text-left uppercase py-1">
              {tagline}
            </div>
          {/if}
          <h2
            class="font-display text-4xl text-black dark:text-white text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left"
          >
            {title}
          </h2>
          <p
            class="mt-4 text-center text-black dark:text-white  md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200"
          >
            {content}
          </p>
          
          {#if primaryButton}
            <button
              class="mt-8 bg-primary-500 bg-primary-700  text-white font-bold py-2 px-8 rounded shadow transition duration-300 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              on:click={() => window.location.href = primaryButton.href}
            >
              {primaryButton.text}
            </button>
          {/if}
        </a>
        </div>
      </div>
    </div>
  </div>