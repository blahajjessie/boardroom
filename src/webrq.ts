
export async function apiCall(
	method: 'GET' | 'POST' | 'DELETE',
	url: string,
	body?: any,
): Promise<any> {
	const opts: RequestInit = { method };
	opts.headers = {};


	if (body) {
		opts.body = JSON.stringify(body);
		opts.headers['content-type'] = 'application/json';
	}

	const req = await fetch(location.href + url, opts);
	const data = await req.json();

	if (data === null || typeof data != 'object') {
		throw new Error('Server responded with invalid JSON');
	} else if (
		data.ok === false ||
		(typeof data.err != 'undefined' && data.err !== null)
	) {
		throw new Error(`Error from server: ${data.err}`);
	} else if (req.status < 200 || req.status >= 300) {
		throw new Error(
			`Invalid HTTP code from server: ${req.status} ${req.statusText}`
		);
	}

	return data;
}