<script lang="ts">
    export let item: any;
    // console.log('item->', item);
    // export let item: string;
    const { fields } = item;
</script>

<h1 class="text-black dark:text-white text-5xl mt-8 mb-4">{fields.title}</h1>
