import React from 'react';
import type { TaskListProps } from '../../types/index.ts'
import TaskItem from '../TaskItem/TaskItem.tsx'

//conditional for empty states
const TaskList: React.FC<TaskListProps> = ({ tasks, onStatusChange, onDelete }) => {

    if (tasks.length === 0) {
        return <p>No Tasks Found.</p>;
    }

return (
    <div className="task-list">
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