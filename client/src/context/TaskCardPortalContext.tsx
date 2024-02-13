import React, { ReactNode, createContext, useState } from 'react';
import TaskDetailsPortal from '../components/board/TaskCardPortal';

type TaskData = {
  id: string;
  title: string;
  description: string;
  category: string;
  subtasks: [];
  totalSubtasks: number;
  dueDate: string;
  priority: string;
};

type PortalContextType = {
  openPortal: (task: TaskData) => void;
  closePortal: () => void;
  taskData: TaskData | null;
};

export const TaskCardPortalContext = createContext<
  PortalContextType | undefined
>(undefined);

export const TaskPortalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [taskData, setTaskData] = useState<TaskData | null>(null);

  const openPortal = (task: TaskData) => setTaskData(task);
  const closePortal = () => setTaskData(null);

  return (
    <TaskCardPortalContext.Provider
      value={{ openPortal, closePortal, taskData }}
    >
      {children}
      {taskData && <TaskDetailsPortal task={taskData} onClose={closePortal} />}
    </TaskCardPortalContext.Provider>
  );
};
