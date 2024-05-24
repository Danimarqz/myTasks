import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function Header() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, [isAuth]);
    return (
        <div className='flex justify-between py-3'>
            <Link to="/tasks">
                <button className='bg-black font-bold text-xl px-7 py-1 rounded-lg hover:bg-stone-950'>Task App</button>
            </Link>
            {isAuth ? (
                <>
                    <button className='bg-indigo-500 px-3 py-2 rounded-lg hover:bg-indigo-700'>
                        <Link to="/tasks-create">Create Task</Link>
                    </button>
                    <button className='bg-green-600 px-3 py-2 rounded-lg hover:bg-green-700' onClick={() => setIsAuth(!isAuth)}>
                        <Link to="/logout">Logout</Link>
                    </button>
                </>
            ) : (
                <>
                    <button className='bg-green-600 px-3 py-2 rounded-lg hover:bg-green-700'>
                        <Link to="/login">Login</Link>
                    </button>

                </>
            )}
        </div>
    );
}