export default function TaskFilter({ filter, setFilter }) {
    return (
        <div className="task-filter">
            <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>Todas las tareas</button>
            <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Tareas Pendientes</button>
            <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Completadas</button>
        </div>
    );
}