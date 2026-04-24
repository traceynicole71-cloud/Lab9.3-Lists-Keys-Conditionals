import React from 'react';
import type { TaskItemProps, TaskStatus } from '../../types/index.ts'

const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange, onDelete }) => {
  //colors for priority
    const priorityColors = {
        low: '#4caf50',
        medium: '#ffff00',
        high: '#ff0000'
    };

    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '1rem',
            margin: '0.5rem 0',
            borderRadius: '8px',
            opacity: task.status === 'completed' ? 0.6 : 1
        }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>

            <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ color: priorityColors[task.priority] }}>{task.priority}</span>
                <span>Due: {task.dueDate}</span>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <select
                value={task.status}
                onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
                >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>

                <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
};

export default TaskItem;