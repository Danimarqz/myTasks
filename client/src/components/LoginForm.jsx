import { useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios";

export function LoginForm () {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const submit = async e => {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        };

        const {data} = await axios.post('http://localhost:8000/token/', 
        user ,{headers: 
        {'Content-Type': 'application/json'},
         withCredentials: true});

        localStorage.clear();

        localStorage.setItem('token', data.access);

        localStorage.setItem('refresh_token', data.refresh);

        window.location.href = '/tasks';
    }
    
    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={submit}>
            <label>
                <p>Username</p>
            </label>
            <input 
                    type="text" value={username} required onChange={e => setUsername(e.target.value)}
                    className='bg-white text-zinc-800 p-3 rounded-lg block w-full mb-3'
                />
            <label>
                <p>Password</p>
            </label>
            <input 
                    type="password" value={password} required onChange={e => setPassword(e.target.value)}
                    className='bg-white text-zinc-800 p-3 rounded-lg block w-full mb-3'
                />
            <button type='submit' className='bg-indigo-500 px-3 py-2 rounded-lg w-full hover:bg-indigo-700'>
            Login
            </button>
            </form>
            <span>Need an account?</span>
            <Link to="/register">
            <button className='bg-green-500 px-3 py-2 rounded-lg m-3 hover:bg-green-700'>
            Register
            </button>
            </Link>
        </div>
    )
}