import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
    const navigate = useNavigate()

    return (
        <div style={{background: "black"}}
        onClick={() => {
            navigate(`/tasks/${task.id}`);
        }}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    );
}