import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { updateTask } from "../api/tasks.api";

export function TaskCard({ task }) {
  const navigate = useNavigate();

  const { id } = useParams();

  const { handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (id) {
      await updateTask(id, data);
      toast.success("Task updated successfully!", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createTask(data);
      toast.success("Task created successfully!", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
  });

  function actualizarDatos(id, title, completed) {
    updateTask(id, { title: title, completed: !completed }).then((response) => {

    });
  }
  return (
    <div className="flex flex-col">
      <div className='bg-zinc-800 p-3 hover:bg-zinc-700 rounded-md hover:cursor-pointer'>
        <div 
          onClick={() => {
            navigate(`/tasks/${task.id}`);
          }}
        >
          <h1 className='text-white font-bold text-xl'>{task.title}</h1>
          <p className='text-white text-sm max-h-9 hover:max-h-full overflow-hidden'>{task.description}</p>
        </div>
        <div className="mt-auto flex items-center pt-3">
          <form onSubmit={onSubmit}>
            <span className="pr-3 text-blue-500 hover:text-blue-700">Completed?</span>
            <input 
              type='checkbox'
              //The key for the checkbox to work with the put :)
              defaultChecked={task.completed}
              onClick={() =>
                actualizarDatos(task.id, task.title, task.completed)
              }
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
