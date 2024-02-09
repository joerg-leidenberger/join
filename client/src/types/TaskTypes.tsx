export type Task = {
  _id: string;
  title: string;
  status: 'toDo' | 'progress' | 'feedback' | 'done';
  description: string;
  category: string;
  priority: 'Urgent';
  dueDate: string;
};

export type TasksState = {
  toDo: Task[];
  progress: Task[];
  feedback: Task[];
  done: Task[];
};

export type TaskFormData = {
  title: string;
  priority: string;
  category: string;
  description: string;
  dueDate: string;
  assignedTo: string[];
  subtasks: string[];
  status: string;
};

export type CountTaskStatus = {
  toDo: number;
  progress: number;
  feedback: number;
  done: number;
};

export type CountTaskUrgent = {
  Urgent: number;
};
