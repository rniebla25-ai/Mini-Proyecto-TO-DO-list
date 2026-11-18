import TaskItem from "./TaskItem";

export default function TaskList({ tasks, toggleTask, deleteTask }) {
    if(tasks.length === 0) {
        return <p className="empty-msg">No hay tareas para mostrar.</p>
    }
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
        ))}
        </ul>
    );
}