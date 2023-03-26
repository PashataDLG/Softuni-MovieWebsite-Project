import * as request from "../services/requester";

const baseUrl = 'http://localhost:3030/users'

export const login = async ({ email, password }) => {
    const result = await request.post(`${baseUrl}/login`, { email, password });
    return result;
}


export const register = async ({ email, password, username }) => {
    const result = await request.post(`${baseUrl}/register`, { email, password, username });
    return result;
}

export const logout = async (accessToken) => {
    try {
        const res = await fetch(`${baseUrl}/logout`, {
            method: 'GET',
            headers: {
                'X-authorization': accessToken
            }
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};