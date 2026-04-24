import React, { useState } from 'react';
import type { TaskListProps } from '../../types/index.ts'
import TaskItem from '../TaskItem/TaskItem.tsx'

//conditional for empty states
const TaskList: React.FC<TaskListProps> = ({ tasks, onStatusChange, onDelete, onAddTask }) => {
const [selectedPriority, setSelectedPriority] = useState<'low' | 'medium' | 'high'>('medium');

return (
    <div className="task-list-container">
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value as any)}
            style={{ padding: '10px' }}
                >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                </select>

            <button
            onClick={() => onAddTask(selectedPriority)}
            style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#4caf50', color: 'white', border: 'none' }}
            >
                + Add New Task
            </button>
        </div>

        {tasks.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#666' }}>No Tasks Matching Your Filters.</p>
        ) : (
            <div className='task-items-wrapper'>
                {tasks.map((task) => (
                    <TaskItem
                    key={task.id} 
                    task={task} 
                    onStatusChange={onStatusChange} 
                    onDelete={onDelete}
                    />
                ))}
            </div>
        )}
    </div>
);
};

export default TaskList;