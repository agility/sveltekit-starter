<script lang="ts">
    export let item: any;
    const { fields } = item;
    const { textblob } = fields;
</script>
<div class="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20">
<div class="my-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full">
<textblob>{@html textblob}</textblob>
</div>
</div>

<style>
    :root {
        --header-color-light: #000;
        --header-color-dark: #fff;
        --text-color-light: #000;
        --text-color-dark: #fff;
        --background-color-light: #fff;
        --background-color-dark: #000;
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --header-color: var(--header-color-dark);
            --text-color: var(--text-color-dark);
            --background-color: var(--background-color-dark);
        }
    }

    @media (prefers-color-scheme: light) {
        :root {
            --header-color: var(--header-color-light);
            --text-color: var(--text-color-light);
            --background-color: var(--background-color-light);
        }
    }

    textblob :global {
        h1 {
            font-size: 30px;
            color: var(--header-color);
        }
        h3 {
            font-size: 20px;
            color: var(--header-color);
        }
        p {
            margin-top: 10px;
            margin-bottom: 15px;
            color: var(--text-color);
        }
    }
</style>
