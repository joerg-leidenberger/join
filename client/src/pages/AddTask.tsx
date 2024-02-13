import { useState } from 'react';
import AssignedTo from '../components/addTask/AssignedTo';
import Category from '../components/addTask/Category';
import Description from '../components/addTask/Description';
import DueDate from '../components/addTask/DueDate';
import EnterTitle from '../components/addTask/EnterTitle';
import Priority from '../components/addTask/Priority';
import Subtasks from '../components/addTask/Subtasks';
import { TaskFormData, Subtask } from '../types/TaskTypes';
import { postTask } from '../api/api';
import { cancelSVG, checkSVG } from '../assets/img/img';

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

  const handleReset = () => {
    setFormData({
      title: '',
      priority: 'Medium',
      category: '',
      description: '',
      dueDate: '',
      assignedTo: [],
      subtasks: [],
      status: 'toDo',
    });
  };

  const handleSubtasksChange = (subtasks: Subtask[]) => {
    setFormData((prev) => ({ ...prev, subtasks }));
  };

  const handleChange = <T extends keyof TaskFormData>(
    name: T,
    value: TaskFormData[T]
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await postTask(formData);
  };

  return (
    <div className='addTask'>
      <div className='addTask__form'>
        <form onSubmit={handleSubmit} id='addTask'>
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
            onChange={handleSubtasksChange}
          />
        </form>
      </div>
      <div className='addTask__buttonContainer'>
        <button
          className='addTask__button-clear'
          type='button'
          onClick={handleReset}
        >
          <div>Clear</div>
          <div>{cancelSVG()}</div>
        </button>
        <button className='addTask__button-create' form='addTask' type='submit'>
          <div>Creat task</div>
          <div>{checkSVG()}</div>
        </button>
      </div>
    </div>
  );
}
export default AddTask;
