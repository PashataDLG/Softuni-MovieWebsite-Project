import * as request from './requester';

const baseUrl = 'http://localhost:3030/users/me';

export const getUserInfo = async () => {
    const response = await request.get(baseUrl);

    return response;
};

