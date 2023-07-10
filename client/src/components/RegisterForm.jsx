import { useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios";

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
    });

    //To-do add auto-login

    window.location.href = '/login';
    }
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