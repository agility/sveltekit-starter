<script lang="ts">
    export let item: any;
    const { fields } = item;
    const { textblob } = fields;
</script>
<div class="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20">
<div class="my-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full">
{@html textblob}
</div>
</div>
