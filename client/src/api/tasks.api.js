import axios from 'axios';

const tasksApi = axios.create({
    baseURL: import.meta.env.API,
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': import.meta.env.API_KEY,
    }
});

export const getAllTasks = async () => {
    try {
        const response = await tasksApi.get('/task');
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}

export const getTask = async (id) => {
    try {
        const response = await tasksApi.get(`/task/id/${id}/`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching task with id ${id}:`, error);
        throw error;
    }
}

export const createTask = async (task) => {
    try {
        const response = await tasksApi.post('/task/add', task);
        return response.data;
    } catch (error) {
        console.error('Error creating task', error);
        throw error;
    }
}

export const delTask = async (id) => {
    try {
        const response = await tasksApi.delete(`/task/id/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting task with id ${id}:`, error);
        throw error;
    }
}

export const updateTask = async (id, task) => {
    try {
        const response = await tasksApi.put(`/task/id/${id}/`, task);
        return response.data;
    } catch (error) {
        console.error(`Error updating task with id ${id}:`, error);
        throw error;
    }
}