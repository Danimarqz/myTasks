import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { toast} from "react-hot-toast";

export function RegisterForm () {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const submit = async e => {
    const user = {
        username: username,
        password: password
    };

    await axios.post('http://localhost:8000/register/', 
    user ,{headers: 
    {'Content-Type': 'application/json'},
    }).then(async res => {
        if (res.status === 201) {
            await axios.post('http://localhost:8000/token/',
            user ,{headers: 
                {'Content-Type': 'application/json'},
                 withCredentials: true}).then(response => {
                    localStorage.clear();

                    localStorage.setItem('token', response.data.access);
        
                    localStorage.setItem('refresh_token', response.data.refresh);
        
                    localStorage.setItem('user_id', response.data.user_id);
        
                    window.location.href = '/tasks';
                 });
        }}).catch(err => {
            toast.error('Username already exists', {
                position: 'top-center',
                style: {
                    background: '#101010',
                    color: 'red'
    
                },
            })
        })
    };

    //To-do add auto-login

    // window.location.href = '/login';
    
    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={submit}>
            <label>
                <p>Username</p>
            </label>
            <input 
                    type="text" 
                    className='bg-white text-zinc-800 p-3 rounded-lg block w-full mb-3'
                    required
                    onChange={e=> setUsername(e.target.value)}
                />
            <label>
                <p>Password</p>
            </label>
            <input 
                    type="password" 
                    className='bg-white text-zinc-800 p-3 rounded-lg block w-full mb-3'
                    required
                    onChange={e=> setPassword(e.target.value)}
                />
            <input type="button" onClick={submit} value="Register" className='bg-indigo-500 px-3 py-2 rounded-lg w-full hover:bg-indigo-700'>
            
            </input>
            </form>
            <span>Have an account already?</span>
            <Link to="/login">
            <button className='bg-red-500 px-3 py-2 rounded-lg m-3 hover:bg-red-700'>
            Log in!
            </button>
            </Link>
        </div>
    )
}