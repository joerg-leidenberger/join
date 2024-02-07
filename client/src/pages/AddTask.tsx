import { useState } from 'react';
import AssignedTo from '../components/addTask/AssignedTo';
import Category from '../components/addTask/Category';
import Description from '../components/addTask/Description';
import DueDate from '../components/addTask/DueDate';
import EnterTitle from '../components/addTask/EnterTitle';
import Priority from '../components/addTask/Priority';
import Subtasks from '../components/addTask/Subtasks';

type TaskFormData = {
  title: string;
  priority: string;
  category: string;
  description: string;
  dueDate: string;
  assignedTo: string[];
  subtasks: string[];
  status: string;
};

function AddTask() {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    priority: 'Medium',
    category: '',
    description: '',
    dueDate: '',
    assignedTo: [],
    subtasks: [],
    status: 'toDo',
  });

  const handleChange = <T extends keyof TaskFormData>(
    name: T,
    value: TaskFormData[T]
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem('token') || sessionStorage.getItem('token');
      const response = await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Netzwerkantwort war nicht ok');
      }

      // Lese den Response-Body einmal und speichere das Ergebnis
      const result = await response.json();

      console.log(result);
      // Verarbeite das Resultat hier weiter...
    } catch (error) {
      console.error('Fehler beim Senden der Daten: ', error);
      // Stelle hier sicher, dass du den Body nicht erneut liest, wenn du ihn bereits gelesen hast
    }
  };

  return (
    <div className='addTask'>
      <div className='addTask__form'>
        <form onSubmit={handleSubmit}>
          <EnterTitle
            title={formData.title}
            onChange={(value) => handleChange('title', value)}
          />
          <Description
            description={formData.description}
            onChange={(value) => handleChange('description', value)}
          />
          <Priority
            priority={formData.priority}
            onChange={(value) => handleChange('priority', value)}
          />
          <DueDate
            dueDate={formData.dueDate}
            onChange={(value) => handleChange('dueDate', value)}
          />
          <AssignedTo
            assignedTo={formData.assignedTo}
            onChange={(value) => handleChange('assignedTo', value)}
          />
          <Category
            category={formData.category}
            onChange={(value) => handleChange('category', value)}
          />
          <Subtasks
            subtasks={formData.subtasks}
            onChange={(value) => handleChange('subtasks', value)}
          />
          <button type='submit'>Absenden</button>
        </form>
      </div>
    </div>
  );
}
export default AddTask;
