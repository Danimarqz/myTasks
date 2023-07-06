import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { updateTask } from "../api/tasks.api";
import { useEffect } from "react";


export function TaskCard({ task }) {
    const navigate = useNavigate()

    const {handleSubmit} = useForm();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data)
            toast.success('Task updated successfully!', {
                position: 'bottom-right',
                style: {
                    background: '#101010',
                    color: '#fff'
                },
            });
        } else {
            await createTask(data);
            toast.success('Task created successfully!', {
                position: 'bottom-right',
                style: {
                    background: '#101010',
                    color: '#fff'

                },
            });
        }
    })
    useEffect(() => {},[task])


    function actualizarDatos(id,title,completed){
        e.preventDefault();
        updateTask(id, {title: title, completed: !completed}).then(response => {
            //Buscar forma de NO usar esto
            window.location.reload()
        })
    }
    return (

        <>
        <div className='bg-zinc-800 p-3 hover:bg-zinc-700 rounded-md hover:cursor-pointer'>

            <div         
            onClick={() => {
                navigate(`/tasks/${task.id}`);
                
            }}>
            <h1 className='text-white font-bold text-xl'>{task.title}</h1>
            <p className='text-white text-sm'>{task.description}</p>
            </div>
            <div>
                <form onSubmit={onSubmit}>
                    <input type='checkbox' checked={task.completed} onChange={(e) => actualizarDatos(task.id, task.title, task.completed, e)}></input>
                </form>
           
        </div>
        </div>
        </>
    );
}