import axios from 'axios';

const authApi = axios.create({
    baseURL: 'https://darkhaiass.pythonanywhere.com',
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
});

export const loginUser = async (user) => {
    try {
        const response = await authApi.post('/token/', user);
        return response.data;
    } catch (error) {
        console.error('Error logging in.', error);
        throw error;
    }
}

export const registerUser = async (user) => {
    try {
        const response = await authApi.post('/register/', user);
        return response.data;
    } catch (error) {
        console.error('Error registering user.', error);
        throw error;
    }
}
