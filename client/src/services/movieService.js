import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/movies';

export const getAll = () => request.get(baseUrl);

export const create = (movieData) => request.post(baseUrl, movieData);

export const edit = (movieData, movieId) => request.put(`${baseUrl}/${movieId}`, movieData);

export const deleteMovie = (movieId) => request.del(`${baseUrl}/${movieId}`);