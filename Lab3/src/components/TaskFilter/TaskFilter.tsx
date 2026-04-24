import React from 'react';
import { TaskFilterProps } from '../../types/index.ts';

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {

    //define change handler
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        //callback from the parent
        onFilterChange({ [name]: value });
    };

    return (
        <div
    )
}