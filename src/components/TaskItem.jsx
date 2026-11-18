export default function TaskItem({ task, toggleTask, deleteTask }) {
    return (
        <li className="task-item">
            <div className="task-content" onClick={() => toggleTask(task.id)}>
                <input type="checkbox" checked={task.completed} onChange={() => {}} />
                <span className="{task.completed ? 'completed' : ''}">
                    {task.text}
                </span>
            </div>
            <button className="btn-delete" onClick={() => deleteTask(task.id)}>Eliminar</button>
        </li>
    );
}