export default function TaskStats({ tasks }) {
  const pendingCount = tasks.filter((task) => !task.completed).length;

  return (
    <footer className="task-stats">
      Tienes <strong>{pendingCount}</strong> {pendingCount === 1 ? 'tarea pendiente' : 'tareas pendientes'}.
    </footer>
  );
}