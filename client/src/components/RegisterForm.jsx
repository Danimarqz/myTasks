import { useState } from 'react';
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loginUser, registerUser } from '../api/auth.api';

export function RegisterForm () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page

        const user = {
            username: username,
            password: password
        };

        try {
            await registerUser(user).then(res => {
                
                if (res.status === 201) {
                    const response = loginUser(user);
    
                    localStorage.clear();
                    localStorage.setItem('token', response.data.access);
                    localStorage.setItem('refresh_token', response.data.refresh);
    
                    window.location.href = '/tasks';
                }
            })

        } catch (err) {
            toast.error('Username already exists or another error occurred', {
                position: 'top-center',
                style: {
                    background: '#101010',
                    color: 'red'
                },
            });
        }
    };

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
                    onChange={e => setUsername(e.target.value)}
                />
                <label>
                    <p>Password</p>
                </label>
                <input 
                    type="password" 
                    className='bg-white text-zinc-800 p-3 rounded-lg block w-full mb-3'
                    required
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" className='bg-indigo-500 px-3 py-2 rounded-lg w-full hover:bg-indigo-700'>
                    Register
                </button>
            </form>
            <span>Have an account already?</span>
            <Link to="/login">
                <button className='bg-red-500 px-3 py-2 rounded-lg m-3 hover:bg-red-700'>
                    Log in!
                </button>
            </Link>
        </div>
    );
}
