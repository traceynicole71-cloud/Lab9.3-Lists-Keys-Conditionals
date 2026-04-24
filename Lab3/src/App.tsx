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

const handleDelete = (id: string) => {
  setTasks(prev => prev.filter(t => t.id !== id));
};

const filteredTasks = task.filter(task => {
  return true;
});

  return (
   <div>
    <TaskFilter onFilterChange={(f) => console.log(f)} />
      <TaskList
      tasks={filteredTasks}
onStatusChange={handleStatusChange}
onDelete={handleDelete}
/>
   </div>
  );
}
export default App
