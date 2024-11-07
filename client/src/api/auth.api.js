import axios from 'axios';
import { encrypt } from './secret';

const authApi = axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': import.meta.env.VITE_API_KEY},
    withCredentials: true
});

export const loginUser = async (user) => {
    try {
        const encryptedData = encrypt(user)
        console.log(import.meta.env.VITE_CORS)
        const response = await authApi.post('/auth', encryptedData);
        return response.data;
    } catch (error) {
        console.error('Error logging in.', error);
        throw error;
    }
}

export const registerUser = async (user) => {
    try {
        const encryptedData = encrypt(user)
        const response = await authApi.post('/register/', encryptedData);
        return response.data;
    } catch (error) {
        console.error('Error registering user.', error);
        throw error;
    }
}

export const checkLogin = async() => {
    const response = await authApi.post('/auth/check/')
    console.log(response.message)
}

export const logout = async() => {
    const response = await authApi.post('/auth/signout/');
    console.log(response.message)
}