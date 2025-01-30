<script lang="ts">
  export let item: any;
  const {
    fields: { title, image, content, category, date },
  } = item;
</script>
<div class="relative px-8 mt-8">
  <div class="max-w-screen-xl mx-auto">
    <div class="h-64 md:h-96 lg:h-[480px] relative overflow-hidden rounded-lg">
      <img src={image.url} alt={image.label} class="w-full" />
    </div>
    <div class="max-w-2xl mx-auto mt-4">
      <div
        data-agility-field="category"
        class="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose"
      >
        {category.fields.title}
      </div>
      <div class="border-b-2 border-primary-500 w-8"></div>
      <div
        data-agility-field="date"
        class="mt-4 uppercase text-gray-600 italic font-semibold text-xs"
      >
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <h1
        data-agility-field="title"
        class="text-black dark:text-white font-display text-4xl font-bold my-6 text-secondary-500"
      >
        {title}
      </h1>
      <div class="prose max-w-full mb-20 text-black dark:text-white">
         {@html content}
      </div>
    </div>
  </div>
</div> 
