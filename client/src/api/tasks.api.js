import axios from 'axios'

const tasksApi = axios.create({
    baseURL: 'https://darkhaiass.pythonanywhere.com/tasks/api/v1/tasks',
    headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}
});

export const getAllTasks = () => {
    
    return tasksApi.get('/')

}

export const getTask = (id) => {
    return tasksApi.get(`/${id}/`)
}

export const createTask = (task) => {
    return tasksApi.post('/', task)
}

export const delTask = (id) => {
    return tasksApi.delete(`/${id}`)
}

export const updateTask = (id, task) => {
    return tasksApi.put(`/${id}/`, task)
}

export const token = () => {
    return tasksApi.get('/home')
}