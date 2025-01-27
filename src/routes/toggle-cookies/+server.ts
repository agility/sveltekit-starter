import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
    const previewModeCookie = cookies.get('previewMode');
    if (previewModeCookie) {
        console.log('Leaving preview mode')
        cookies.delete('previewMode', {path: '/'});
    } else {
        console.log('Entering preview mode')
        cookies.set('previewMode', 'true', { path: '/' });
    }
	return json({ toggled: true});
}