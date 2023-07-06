import { useNavigate } from "react-router-dom";
import { updateTask } from "../api/tasks.api";

export function TaskCard({ task }) {
    const navigate = useNavigate()

    return (
        <div className='bg-zinc-800 p-3 hover:bg-zinc-700 rounded-md hover:cursor-pointer'
        onClick={() => {
            navigate(`/tasks/${task.id}`);
        }}>
            <h1 className='text-white font-bold text-xl'>{task.title}</h1>
            <p className='text-white text-sm'>{task.description}</p>
            <input type='checkbox' checked={task.completed} readOnly></input>
           
        </div>
    );
}