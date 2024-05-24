import { useState } from 'react';
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loginUser } from '../api/auth.api';

export function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        const user = {
            username,
            password
        };

        try {
            const res = await loginUser(user);

            if (res.status === 200) {
                toast.success('Login Successful', {
                    position: 'top-center',
                    style: {
                        background: '#101010',
                        color: '#fff'
                    }
                });

                localStorage.clear();
                localStorage.setItem('token', res.access);
                localStorage.setItem('refresh_token', res.refresh);
                localStorage.setItem('user_id', res.user_id);

                window.location.href = '/tasks';
            }
        } catch (err) {
            toast.error('Invalid Credentials', {
                position: 'top-center',
                style: {
                    background: '#101010',
                    color: 'red'
                }
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
                    value={username}
                    required
                    onChange={e => setUsername(e.target.value)}
                    className='bg-white text-zinc-800 p-3 rounded-lg block w-full mb-3'
                />
                <label>
                    <p>Password</p>
                </label>
                <input
                    type="password"
                    value={password}
                    required
                    onChange={e => setPassword(e.target.value)}
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
    );
}
