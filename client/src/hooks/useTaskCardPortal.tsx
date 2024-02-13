import { useContext } from 'react';
import { TaskCardPortalContext } from '../context/TaskCardPortalContext';

export const useTaskCardPortal = () => {
  const context = useContext(TaskCardPortalContext);
  if (context === undefined) {
    throw new Error('useTaskPortal must be used within a TaskPortalProvider');
  }
  return context;
};
