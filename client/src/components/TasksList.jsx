import { useEffect, useState } from "react"
import { getAllTasks } from '../api/tasks.api'
import {TaskCard} from './TaskCard'

export function TasksList(){
    const [tasks, setTasks] = useState([]);
  

    useEffect(() => {
        async function loadTasks(){
            try{
                const res = await getAllTasks()
                setTasks(res.data)
            
        }catch (err){
            console.log(err)
        
        }
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