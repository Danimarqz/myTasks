import { Link } from "react-router-dom"

export function RegisterForm () {
    return (
        <div className='max-w-xl mx-auto'>
            <label>
                <p>Username</p>
            </label>
            <input 
                    type="text" 
                    className='bg-white text-zinc-800 p-3 rounded-lg block w-full mb-3'
                />
            <label>
                <p>Password</p>
            </label>
            <input 
                    type="password" 
                    className='bg-white text-zinc-800 p-3 rounded-lg block w-full mb-3'
                />
            <button className='bg-indigo-500 px-3 py-2 rounded-lg w-full hover:bg-indigo-700'>
            Register
            </button>
            <span>Have an account already?</span>
            <Link to="/">
            <button className='bg-red-500 px-3 py-2 rounded-lg m-3 hover:bg-red-700'>
            Log in!
            </button>
            </Link>
        </div>
    )
}