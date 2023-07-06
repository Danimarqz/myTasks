import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, delTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function TasksFormPage(){

    const {register, handleSubmit, formState: {errors}, setValue} = useForm();
    
    const navigate = useNavigate();
    const params = useParams();

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
        navigate('/tasks');
    })
    
    useEffect(() => {
        async function loadTask(){
            if (params.id) {
                const {data} = await getTask(params.id)
                setValue('title', data.title);
                setValue('description', data.description);
                setValue('completed',data.completed);
                
        }
        }
        loadTask();
    }, []);

    return(
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    {...register("title", {required: true})}
                    className='bg-zinc-800 p-3 rounded-lg block w-full mb-3'
                />
                {errors.title && <span>This field is required</span>}
                <textarea 
                    rows="3" 
                    placeholder="Description" 
                    {...register("description", {required: true})}
                    className='bg-zinc-800 p-3 rounded-lg block w-full mb-3'
                >
                {errors.description && <span>This field is required</span>}
                </textarea>
                <input type="checkbox" {...register("completed")} className='mr-2'/>
                <button className='bg-indigo-500 p-3 rounded-lg text-white font-bold hover:bg-indigo-700 w-full mt-3 block' type='submit'>Save</button>
            </form>
            {params.id && (
            <button 
            className='bg-red-500 p-3 rounded-lg text-white font-bold hover:bg-red-700 w-full mt-3 block'
            onClick={async ()=> {
                const accepted = window.confirm('Are you sure?')
                if (accepted) {
                    await delTask(params.id);
                    toast.success('Task deleted successfully!', {
                    position: 'bottom-right',
                    style: {
                        background: '#101010',
                        color: '#fff'
    
                    },
                });
                navigate('/tasks');
                }
            }}
            >Delete</button>)}
        </div>
    )
}