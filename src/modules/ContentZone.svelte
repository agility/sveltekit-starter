<script lang="ts">
  import FeaturedPost from "./agility-components/FeaturedPost.svelte";
  import Heading from "./agility-components/Heading.svelte";
  import PostsListing from "./agility-components/PostsListing.svelte";
  import TextBlockWithImage from "./agility-components/TextBlockWithImage.svelte";
  import RichTextArea from "./agility-components/RichTextArea.svelte";
  import PostDetails from "./agility-components/PostDetails.svelte";
  export let Components: any;
  export let dynamicPageItem: any;
  

</script>

<div>
  {#each Components as component}
    {#if component.module === "PostsListing"}
      <PostsListing {...component} />
    {:else if component.module === "FeaturedPost"}
      <FeaturedPost {...component} />
    {:else if component.module === "Heading"}
      <Heading {...component} />
    {:else if component.module === "RichTextArea"}
      <RichTextArea {...component} />
    {:else if component.module === "TextBlockWithImage"}
      <TextBlockWithImage {...component} />
    {:else if component.module === "PostDetails"}
      <PostDetails {...component} {dynamicPageItem} />
    {:else}
      <p>Component {component.module} not found</p>
    {/if}
  {/each}
</div>
