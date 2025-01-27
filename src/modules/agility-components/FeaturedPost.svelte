<script lang="ts">
    export let item: any;
    const { fields } = item;
    const { featuredPost } = fields;

    console.log('featuredPost->', item);
</script>

<div class="relative mb-8">
    <div class="flex flex-col sm:flex-row max-w-screen-xl mx-auto pt-8 group">
        <div class="sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg relative">
            <a href={`/blog/${featuredPost.fields.slug}`} class="cursor-pointer">
                <div class="h-64 sm:h-96 relative w-full">
                    <img
                        src={featuredPost.fields.image.url}
                        alt={featuredPost.fields.image.label}
                        class="object-cover object-center w-full h-full rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
                    />
                </div>
            </a>
        </div>
        <div class="sm:w-1/2 lg:w-1/3 bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 relative">
            <a href={`/blog/${featuredPost.fields.slug}`} class="cursor-pointer">
                <div class="font-display uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content">
                    {featuredPost.fields.category?.fields.title}
                </div>
                <div class="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                    {new Date(featuredPost.properties.modified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <h2 class="font-display text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
                    {featuredPost.fields.title}
                </h2>
                <p class="text-sm mt-3 leading-loose text-gray-600 font-medium line-clamp-4">
                    {@html featuredPost.fields.content}
                </p>
            </a>
        </div>
    </div>
</div>