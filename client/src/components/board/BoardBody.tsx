import React, { useEffect, useState } from 'react';
import NoTask from './NoTask';
import TaskCard from './TaskCard';

type Task = {
  _id: string;
  title: string;
  status: 'toDo' | 'progress' | 'feedback' | 'done';
};

type TasksState = {
  toDo: Task[];
  progress: Task[];
  feedback: Task[];
  done: Task[];
};

function BoardBody() {
  const [tasks, setTasks] = useState<TasksState>({
    toDo: [],
    progress: [],
    feedback: [],
    done: [],
  });

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const token =
          localStorage.getItem('token') || sessionStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const response = await fetch('http://localhost:3000/api/tasks', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not okay.');
        }

        const fetchedTasks: Task[] = await response.json();

        const tasksByStatus: TasksState = fetchedTasks.reduce(
          (acc, task) => {
            acc[task.status] = [...(acc[task.status] || []), task];
            return acc;
          },
          {
            toDo: [],
            progress: [],
            feedback: [],
            done: [],
          } as TasksState
        );

        setTasks(tasksByStatus);
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    };

    loadTasks();
  }, []);

  const updateTaskStatus = async (_id: string, newStatus: keyof TasksState) => {
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/tasks/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Error updating the task.');
      }

      const updatedTask = await response.json();
      console.log('Task successfully updated:', updatedTask);
    } catch (error) {
      console.error('Error updating the task:', error);
    }
  };

  const getStatusKey = (status: string): keyof TasksState | null => {
    const validKeys: Array<keyof TasksState> = [
      'toDo',
      'progress',
      'feedback',
      'done',
    ];
    return validKeys.includes(status as keyof TasksState)
      ? (status as keyof TasksState)
      : null;
  };

  const handleDragOver = (e: React.DragEvent): void => {
    e.preventDefault();
  };

  const handleDrop =
    (column: string) =>
    async (e: React.DragEvent): Promise<void> => {
      e.preventDefault();
      const _id: string = e.dataTransfer.getData('text/plain');
      const validColumn = getStatusKey(column);
      if (validColumn) {
        await updateTaskStatus(_id, validColumn);

        setTasks((prevTasks) => {
          let taskToUpdate: Task | null = null;
          const updatedTasks: TasksState = {
            toDo: [],
            progress: [],
            feedback: [],
            done: [],
          };

          Object.entries(prevTasks).forEach(([status, tasksArray]) => {
            tasksArray.forEach((task) => {
              if (task._id === _id) {
                taskToUpdate = { ...task, status: validColumn };
              } else {
                updatedTasks[status as keyof TasksState].push(task);
              }
            });
          });

          if (taskToUpdate) {
            updatedTasks[validColumn].push(taskToUpdate);
          }

          return updatedTasks;
        });
      } else {
        console.error('Invalid column name.');
      }
    };

  return (
    <div className='boardBody'>
      {Object.entries(tasks).map(([column, tasksArray]) => (
        <div
          key={column}
          className={`boardBody__column boardBody__${column}`}
          onDragOver={handleDragOver}
          onDrop={handleDrop(column)}
        >
          {tasksArray.length === 0 ? (
            <NoTask />
          ) : (
            tasksArray.map((task) => (
              <TaskCard
                key={task._id}
                id={task._id}
                title={task.title}
                description={''}
              />
            ))
          )}
        </div>
      ))}
    </div>
  );
}

export default BoardBody;
