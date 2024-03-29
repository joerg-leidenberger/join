import { SignUpFormData, Task, TaskFormData } from '../types/TaskTypes';

const API_TASKS = 'http://localhost:3000/api/tasks';
const API_SIGNUP = 'http://localhost:3000/api/signup';
const API_LOGIN = 'http://localhost:3000/api/login';
const API_USER = 'http://localhost:3000/api/user';

export const fetchTasks = async (): Promise<Task[]> => {
  const token =
    localStorage.getItem('token') || sessionStorage.getItem('token');
  if (!token) throw new Error('No token found');

  const response = await fetch(API_TASKS, {
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

  const response = await fetch(`${API_TASKS}/${_id}`, {
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

  const response = await fetch(`${API_TASKS}`, {
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

export const postSignUp = async (SignUpFormData: SignUpFormData) => {
  const response = await fetch(`${API_SIGNUP}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(SignUpFormData),
  });

  if (!response.ok) throw new Error('Error register new User');
};

export const postLogin = async (
  email: string,
  password: string,
  rememberMe: boolean,
  login: (token: string) => void
) => {
  const response = await fetch(`${API_LOGIN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login fehlgeschlagen');
  }

  const { token } = await response.json();

  if (rememberMe) {
    localStorage.setItem('token', token);
  } else {
    sessionStorage.setItem('token', token);
  }

  login(token);
};

export const getName = async () => {
  const token =
    localStorage.getItem('token') || sessionStorage.getItem('token');
  if (!token) throw new Error('No token found');

  const response = await fetch(API_USER, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error('Network response was not okay.');

  return response.json();
};
