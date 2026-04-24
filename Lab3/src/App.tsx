import { useState } from 'react'
import type { Task, TaskStatus } from './types/index.ts'
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import './App.css'

function App() {
//initialize
  const [task, setTasks] = useState<Task[]>([
  { id: '1', title: 'Task 1', description: 'Sample task', status: 'pending', priority: 'medium', dueDate: '2026-05-01' }
]);
//handle task updates
  function handleStatusChange(id: string, status: TaskStatus) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status } : t));
  }
//handle delete
const handleDelete = (id: string) => {
  setTasks(prev => prev.filter(t => t.id !== id));
};
//filter tasks
const [filter, setFilter] = useState<TaskStatus | 'all'>('all');
const filteredTasks = task.filter(task => {
  return filter === 'all' || task.status === filter;
});

//handle filter change
const handleFilterChange = (filters: { status?: TaskStatus; priority?: string }) => {
  if (filters.status) {
    setFilter(filters.status);
  }
};

//add tasks
const handleAddTask = (priority: 'low' | 'medium' | 'high' ) => {
  const newTask: Task = {
    id: crypto.randomUUID(),
    title: `Task ${task.length + 1}`,
    description: "New task details",
    status: 'pending',
    priority: priority,
    dueDate: new Date().toISOString().split('T')[0]
  };
  setTasks(prev => [newTask, ...prev]);
};
  return (
   <div className="App">
    <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
      tasks={filteredTasks}
onStatusChange={handleStatusChange}
onDelete={handleDelete}
onAddTask={handleAddTask}
/>
   </div>
  );
}
export default App
