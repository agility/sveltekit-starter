<script lang="ts">
    export let item: any;
    const { fields } = item;
    const { posts } = fields;
    // console.log('posts->', posts);
</script>

<div class="max-w-screen-xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
            {#each posts as post}
            {console.log(post)}
                <a href={`/blog/${post.fields.slug}`} class="col-span-1">
                    <div class="flex-col group mb-8 md:mb-0">
                        <div class="relative h-64 w-full overflow-clip">
                            {#if post.fields.image.url.includes("https://placehold.co/")}
                                <img
                                    src={post.fields.image.url}
                                    alt={post.fields.image.label}
                                    class="object-cover object-center rounded-t-lg w-full"
                                />
                            {:else}
                               <img
                                src={post.fields.image.url}
                                class="object-cover object-center rounded-t-lg w-full"
                                alt={post.fields.image.label}
                                /> 
                            {/if}
                        </div>
                        <div class="bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg">
                            <div class="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                                <!-- {post.fields.category} -->
                                 Category
                            </div>
                            <div class="border-b-2 border-primary-500 w-8"></div>
                            <div class="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                                {new Date(post.fields.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                

                            </div>
                            <h2 class="text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
                                {post.fields.title}
                            </h2>
                        </div>
                    </div>
                </a>
         
            {/each}
  
</div>