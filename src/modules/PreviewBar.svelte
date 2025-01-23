<script lang="ts">

    export let isPreview: boolean;

    // console.log('PreviewBar isPublishedMode->', isPublishedMode);
    // let isToggled = true;

    async function toggle() {
        // isPreviewMode = !isPreviewMode;
        isPreview = !isPreview;
        // await fetch('/api/toggle-cookie', { method: 'POST' });
        const toggle = await fetch('/api/toggle-cookies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: null
        })

        console.log(toggle)

    }

    // console.log('isPreviewMode->', isPreviewMode);
</script>

<div class=" bg-yellow-500 p-2 flex flex-row justify-between">
    <div>
        Preview Bar only Appears in Dev Mode
    </div>
    <div>
    {#if isPreview}
        Viewing in Preview Mode
    {:else}
        Viewing in Published Mode
    {/if}
</div>
    <button on:click={toggle} class="bg-black p-2 text-white">
        {isPreview ? 'View Published' : 'View in Preview'}
    </button>
</div>