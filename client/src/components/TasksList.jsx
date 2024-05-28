import { useEffect, useState } from "react"
import { getAllTasks } from '../api/tasks.api'
import {TaskCard} from './TaskCard'

export function TasksList(){
    const [tasks, setTasks] = useState([]);
  

    useEffect(() => {
        async function loadTasks(){
                await getAllTasks().then(res => setTasks(res));
            }
        loadTasks()
    }, [])
    
    return(
        <div className='grid grid-cols-4 gap-4'>
           {tasks.map(task=> (
                <TaskCard key={task.id} task={task} />  
             ))}
             
        </div>
    )
}