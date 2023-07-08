import { useEffect, useState } from "react"
import { getAllTasks } from '../api/tasks.api'
import {TaskCard} from './TaskCard'

export function TasksList(){
    const [tasks, setTasks] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        async function loadUserProfile() {
            try {
              const userProfile = await getUserProfile().then(res => {
                console.log(res.data)})
              setUserId(userProfile.data.id);
              
            } catch (error) {
              // Manejar el error al obtener el perfil del usuario
            }
          }
        async function loadTasks(){
            try{
                await loadUserProfile()
                const res = await getAllTasks()
                const filteredTasks = res.data.filter(tasks => tasks.author_id === userId); // Filtrar las tareas por el usuario autenticado
                setTasks(filteredTasks)
                console.log(tasks.author_id)
        }catch (err){
            console.log(err)
        
        }
    }
        loadTasks()
    }, [userId])
    
    return(
        <div className='grid grid-cols-4 gap-4'>
           {tasks.map(task=> (
                <TaskCard key={task.id} task={task} />  
             ))}
        </div>
    )
}