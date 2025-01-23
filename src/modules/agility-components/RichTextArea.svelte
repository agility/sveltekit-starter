<script lang="ts">
    export let item: any;
    const { fields } = item;
    const { textblob } = fields;
</script>
<div class="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20">
<div class="text-black dark:text-white my-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full">
<textblob>{@html textblob}</textblob>
</div>
</div>

<style>
    textblob :global { 
        h1 {
            font-size:30px;
        }
        h3 {
            font-size:20px;
        }
        p {
            margin-top:10px; margin-bottom:15px;
        }
        blockquote {
            margin-top:10px; margin-bottom:15px;
            border-right:3px solid #fff;
            background: #888;
            padding:10px;
        }
    }
</style>
