import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/comments';

export const getComments = async (movieId) => {
    const search = encodeURIComponent(`movieId="${movieId}"`);
    const relation = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${search}&load=${relation}`);
    const comments = Object.values(result);

    return comments
};

export const addComment = async (movieId, comment) => {
    const result = await request.post(baseUrl, { movieId, comment });
    
    return result;
};