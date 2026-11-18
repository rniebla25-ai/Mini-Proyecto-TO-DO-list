import { useState } from "react";

export default function TaskForm({ addTask}) {
    const [text, setText] = useState('');

    const handleSumit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTask(text.trim());
        setText('');
    };

    return (
        <form className="task-form" onSubmit={handleSumit}>
            <input type="text" placeholder="Escribe una nueva tarea..." value={text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit" className="btn-add">Agregar</button>
        </form>
    )
}