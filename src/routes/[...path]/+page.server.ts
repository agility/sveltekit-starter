import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	// const post = await getPostFromDatabase(params.slug);
    const post = {
        title: "Hello World",
        content: "This is the",
        slug: params.path
    }

    console.log(post);
	if (post) {
		return post;
	}

	error(404, 'Not found');
};