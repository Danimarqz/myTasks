import axios from 'axios';

const tasksApi = axios.create({
    baseURL: 'https://darkhaiass.pythonanywhere.com/tasks/api/v1/tasks',
    headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}
});

export const getAllTasks = async () => {
    try {
        const response = await tasksApi.get('/');
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}

export const getTask = async (id) => {
    try {
        const response = await tasksApi.get(`/${id}/`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching task with id ${id}:`, error);
        throw error;
    }
}

export const createTask = async (task) => {
    try {
        const response = await tasksApi.post('/', task);
        return response.data;
    } catch (error) {
        console.error('Error creating task', error);
        throw error;
    }
}

export const delTask = async (id) => {
    try {
        const response = await tasksApi.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting task with id ${id}:`, error);
        throw error;
    }
}

export const updateTask = async (id, task) => {
    try {
        const response = await tasksApi.put(`/${id}/`, task);
        return response.data;
    } catch (error) {
        console.error(`Error updating task with id ${id}:`, error);
        throw error;
    }
}

export const token = async () => {
    try {
        const response = await tasksApi.get('/home');
        return response.data;
    } catch (error) {
        console.error('Error fetching token', error);
        throw error;
    }
}
