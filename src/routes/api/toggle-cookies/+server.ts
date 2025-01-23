import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {

    // const previewModeCookie = cookie
    const publishedMode = cookies.get('publishedMode', {path: '/'});


    if (publishedMode) {
        console.log('Deleting Cookie')
        cookies.delete('publishedMode', {path: '/'});
    } else {
        console.log('Setting Cookie')
        cookies.set('publishedMode', 'true', { path: '/' });
    }


	// const { a, b } = await request.json();
	return json({ toggled: true});
}

// export async function POST({reques, cookies}) {

//     console.log(await request)
//     console.log(await cookies)
//     // const cookies = request.headers.get('cookie') || '';

//     // console.log(cookies)
//     return new Response(JSON.stringify({}), {
//         headers: {
//             'content-type': 'application/json'
//         }
//     });
    
// }