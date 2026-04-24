import React from 'react';
import type { TaskFilterProps } from '../../types/index.ts';

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {

    //define change handler
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        //callback from the parent
        onFilterChange({ [name]: value });
    };

    return (
        <div style={{
            display: 'flex',
            gap: '20px',
            padding: '1rem',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            marginBottom: '1rem'
        }}>

        {/* status filter dropdown */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="status-filter" style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                Status
            </label>
            <select
            id="status-filter"
            name="status"
            onChange={handleChange}
            >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
        </div>

        {/* priority filter dropdown */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="priority-filter" style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                Priority
            </label>
            <select id="priority-filter"
            name="priority"
            onChange={handleChange}
            >
                <option value="all">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
        </div>
    );
};

export default TaskFilter;