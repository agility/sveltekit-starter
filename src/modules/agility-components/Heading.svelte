<script lang="ts">
    export let item: any;
    // console.log('item->', item);
    // export let item: string;
    const { fields } = item;
</script>

<h1 class="text-black dark:text-white text-3xl font-bold mt-12 mb-6">{fields.title}</h1>
