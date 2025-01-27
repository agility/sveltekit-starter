import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
    const previewMode = cookies.get('previewMode', {path: '/'});
    if (previewMode) {
        console.log('Leaving preview mode')
        cookies.delete('previewMode', {path: '/'});
    } else {
        console.log('Entering preview mode')
        cookies.set('previewMode', 'true', { path: '/' });
    }
	return json({ toggled: true});
}