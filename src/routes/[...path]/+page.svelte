<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const { slug, title, content } = data;
	console.log(data); // [{ slug: 'profile', title: 'Profile' }, ...]
</script>

<main>
	<p>Slug: {slug}</p>
</main>