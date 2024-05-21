import axios from 'axios'

const tasksApi = axios.create({
    baseURL: 'http://backend:8000/tasks/api/v1/tasks',
    headers: {"Authorization": `Bearer ${localStorage.getItem('token')}`}
})

const registerApi = axios.create({
    baseURL: 'http://backend:8000/register/',
    headers: {'Content-Type': 'application/json'}
})

const loginApi = axios.create({
    baseURL: 'http://backend:8000/token/',
    headers: {"Content-Type": 'application/json'},
    withCredentials: true
})
// const loginApi = axios.create({
//     baseURL: 'http://localhost:8000/token/'
// })
export const registerUser = (user) => {
    return registerApi.post('/', user)
}

export const loginUser = (user) => {
    return loginApi.post('/', user)
}
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