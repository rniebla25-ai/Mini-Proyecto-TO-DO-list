import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskFilter from './components/TaskFilter'
import TaskList from './components/TaskList'
import TaskStats from './components/TaskStats'
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved
    ? JSON.parse(saved)
    :[{ id: 1, text: 'Aprender React Basico', completed: false}];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1>Mini To-Do App</h1>
        <TaskForm addTask={addTask} />
        <TaskFilter filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
        <TaskStats tasks={tasks} />
      </div>
    </div>
  );
}
