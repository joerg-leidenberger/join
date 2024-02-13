import React from 'react';
import useTasks from '../../hooks/useTasks';
import NoTask from './NoTask';
import TaskCard from './TaskCard';
import { TasksState } from '../../types/TaskTypes';

const BoardBody = () => {
  const { tasks, setTasks, updateTaskStatus } = useTasks();

  const handleDragOver = (e: React.DragEvent): void => {
    e.preventDefault();
  };

  const handleDrop =
    (column: keyof TasksState) =>
    async (e: React.DragEvent): Promise<void> => {
      e.preventDefault();
      const _id: string = e.dataTransfer.getData('text/plain');
      await updateTaskStatus(_id, column);

      setTasks((prevTasks) => {
        let taskToUpdate = null;
        const updatedTasks: TasksState = {
          toDo: [],
          progress: [],
          feedback: [],
          done: [],
        };

        Object.entries(prevTasks).forEach(([status, tasksArray]) => {
          tasksArray.forEach((task) => {
            if (task._id === _id) {
              taskToUpdate = { ...task, status: column };
            } else {
              updatedTasks[status as keyof TasksState].push(task);
            }
          });
        });

        if (taskToUpdate) {
          updatedTasks[column].push(taskToUpdate);
        }

        return updatedTasks;
      });
    };

  return (
    <div className='boardBody'>
      {Object.entries(tasks).map(([column, tasksArray]) => (
        <div
          key={column}
          className={`boardBody__column boardBody__${column}`}
          onDragOver={handleDragOver}
          onDrop={handleDrop(column as keyof TasksState)}
        >
          {tasksArray.length === 0 ? (
            <NoTask />
          ) : (
            tasksArray.map((task) => (
              <TaskCard
                key={task._id}
                id={task._id}
                title={task.title}
                description={task.description}
                category={task.category}
                totalSubtasks={task.subtasks.length}
                dueDate={task.dueDate}
                priority={task.priority}
                subtasks={task.subtasks}
              />
            ))
          )}
        </div>
      ))}
    </div>
  );
};

export default BoardBody;
