const request = async (method, url, data) => {
    try {
        const user = localStorage.getItem('auth');
        let auth = { accessToken: null };

        if (user) {
            try {
                auth = JSON.parse(user);
            } catch (err) {
                console.error('Error parsing auth data: ', err);
            }
        }

        let headers = {};

        if (auth.accessToken) {
            headers['X-authorization'] = auth.accessToken
        }

        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url, { headers });
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        const response = await buildRequest;

        if (response.ok !== true) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();

        return result;
    } catch (err) {
        alert(err);
        throw err;
    }
};

export const get = request.bind({}, 'GET');
export const put = request.bind({}, 'PUT');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const del = request.bind({}, 'DELETE');