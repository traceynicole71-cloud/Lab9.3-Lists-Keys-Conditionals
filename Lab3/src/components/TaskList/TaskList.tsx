import React from 'react';
import { TaskListProps } from '../../types/index.ts'
import TaskItem from '../TaskItem/TaskItem.tsx'

//conditional for empty states
const TaskList: React.FC<TaskListProps> = ({ task, onStatusChange, onDelete }) => {

    if (TaskSignal.length === 0) {
        return <p>No Tasks Found.</p>;
    }

return (
    <div className="task-list">
        {Tasks.map((task) => (
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