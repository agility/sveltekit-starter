<script lang="ts">
  import FeaturedPost from "./agility-components/FeaturedPost.svelte";
  import Heading from "./agility-components/Heading.svelte";
  import PostsListing from "./agility-components/PostsListing.svelte";
  import TextBlockWithImage from "./agility-components/TextBlockWithImage.svelte";
  import RichTextArea from "./agility-components/RichTextArea.svelte";
  import PostDetails from "./agility-components/PostDetails.svelte";
  
  export let zone: string;
  export let data: any;

  const { page, contentItem } = data.page;
  const { zones } = page;

  const ContentZone = zones[zone];

  ContentZone.forEach((component: any, index:number) => {
    if (component.module === "PostDetails") {
      ContentZone[index].item.fields = contentItem.fields;
    }
  });

  export let Components: any = ContentZone;
  
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
      <PostDetails {...component} />
    {:else}
      <p>Component {component.module} not found</p>
    {/if}
  {/each}
</div>
