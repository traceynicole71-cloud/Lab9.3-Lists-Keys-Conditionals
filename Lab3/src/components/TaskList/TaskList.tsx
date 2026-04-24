import React from 'react';
import type { TaskListProps } from '../../types/index.ts'
import TaskItem from '../TaskItem/TaskItem.tsx'

//conditional for empty states
const TaskList: React.FC<TaskListProps> = ({ tasks, onStatusChange, onDelete, onAddTask }) => {

    if (tasks.length === 0) {
        return <p>No Tasks Found.</p>;
    }

return (
    <div className="task-list-container">
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <button
            onClick={onAddTask}
            style={{ padding: '10px 20px', cursor: 'pointer' }}
            >
                + Add New Task
            </button>
        </div>
        
        {tasks.map((task) => (
            <TaskItem
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
            />
        ))}
    </div>
);
};

export default TaskList;