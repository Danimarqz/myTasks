import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, delTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';

export function TasksFormPage(){

    const {register, handleSubmit, formState: {errors}, setValue} = useForm();
    
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateTask(params.id, data)
        } else {
            await createTask(data)
        }
        navigate('/tasks');
    })
    
    useEffect(() => {
        async function loadTask(){
            if (params.id) {
                console.log('Getting data')
                const {data} = await getTask(params.id)
                setValue('title', data.title);
                setValue('description', data.description);
        }
        }
        loadTask();
    }, []);

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    {...register("title", {required: true})}
                />
                {errors.title && <span>This field is required</span>}
                <textarea 
                    rows="3" 
                    placeholder="Description" 
                    {...register("description", {required: true})}
                >
                {errors.description && <span>This field is required</span>}
                </textarea>
                <button>Save</button>
            </form>
            {params.id && (<button onClick={async ()=> {
                const accepted = window.confirm('Are you sure?')
                accepted && await delTask(params.id);
                navigate('/tasks');
                }
            }
            >Delete</button>)}
        </div>
    )
}