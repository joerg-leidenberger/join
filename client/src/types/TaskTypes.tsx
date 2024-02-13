export type Task = {
  _id: string;
  title: string;
  status: 'toDo' | 'progress' | 'feedback' | 'done';
  description: string;
  category: string;
  priority: 'Urgent';
  dueDate: string;
  subtasks: [];
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
  subtasks: Subtask[];
  status: string;
};

export type Subtask = {
  id: string;
  value: string;
};

export type SubtasksProps = {
  subtasks: Subtask[];
  onChange: (subtasks: Subtask[]) => void;
};

export type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptPolicy: boolean;
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
