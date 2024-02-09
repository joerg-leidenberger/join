import { Task, TaskFormData } from '../types/TaskTypes';

const API_URL = 'http://localhost:3000/api/tasks';

export const fetchTasks = async (): Promise<Task[]> => {
  const token =
    localStorage.getItem('token') || sessionStorage.getItem('token');
  if (!token) throw new Error('No token found');

  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error('Network response was not okay.');

  return response.json();
};

export const updateTask = async (
  _id: string,
  newStatus: string
): Promise<Task> => {
  const token =
    localStorage.getItem('token') || sessionStorage.getItem('token');
  if (!token) {
    console.error('No token found');
  }

  const response = await fetch(`${API_URL}/${_id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status: newStatus }),
  });

  if (!response.ok) throw new Error('Error updating the task.');

  return response.json();
};

export const postTask = async (formData: TaskFormData) => {
  const token =
    localStorage.getItem('token') || sessionStorage.getItem('token');
  if (!token) {
    console.error('No token found');
  }

  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) throw new Error('Error updating the task.');

  const result = await response.json();

  console.log(result);
};
