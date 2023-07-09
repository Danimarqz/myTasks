import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export function Navigation(){
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
                <h1 className='text-2xl font-bold text-blue-500 hover:text-blue-700'>Task App</h1>
            </Link>

            <button className='bg-indigo-500 px-3 py-2 rounded-lg hover:bg-indigo-700'>
            <Link to="/tasks-create">Create Task</Link>
            </button>
            <button className='bg-green-500 px-3 py-2 rounded-lg hover:bg-green-700'>
            {isAuth ? <Link to="/logout">Logout</Link> :  
                    <Link to="/login">Login</Link>}
            </button>
        </div>
    )
}