<script lang="ts">
    export let item: any;
    const { fields: { title } } = item;
</script>

<h1 class="text-black dark:text-white text-3xl font-bold mt-12 mb-6">{title}</h1>
