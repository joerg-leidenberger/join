import React, { useState } from 'react';
import NoTask from './NoTask';
import TaskCard from './TaskCard';

type Task = {
  id: string;
  title: string;
};

type TasksState = {
  toDo: Task[];
  progress: Task[];
  feedback: Task[];
  done: Task[];
};

function BoardBody() {
  const [tasks, setTasks] = useState<TasksState>({
    toDo: [{ id: 'task1', title: 'Kochwelt Page & Recipe Recommender' }],
    progress: [],
    feedback: [],
    done: [],
  });

  const handleDragOver = (e: React.DragEvent): void => {
    e.preventDefault();
  };

  const handleDrop =
    (column: keyof TasksState) =>
    (e: React.DragEvent): void => {
      e.preventDefault();
      const taskId: string = e.dataTransfer.getData('text/plain');
      const task: Task | undefined = Object.keys(tasks).reduce(
        (acc: Task | undefined, key) => {
          const found = tasks[key as keyof TasksState].find(
            (taskItem) => taskItem.id === taskId
          );
          if (found) acc = { ...found };
          return acc;
        },
        undefined
      );

      if (task) {
        setTasks((prev) => {
          const newTasks = { ...prev };
          Object.keys(newTasks).forEach((taskColumn) => {
            newTasks[taskColumn as keyof TasksState] = newTasks[
              taskColumn as keyof TasksState
            ].filter((task) => task.id !== taskId);
          });
          newTasks[column] = [...newTasks[column], task];
          return newTasks;
        });
      }
    };

  return (
    <div className='boardBody'>
      {Object.keys(tasks).map((column: string) => (
        <div
          key={column}
          className={`boardBody__column boardBody__${column}`}
          onDragOver={handleDragOver}
          onDrop={handleDrop(column as keyof TasksState)}
        >
          {tasks[column as keyof TasksState].length === 0 && <NoTask />}
          {tasks[column as keyof TasksState].map((task: Task) => (
            <TaskCard key={task.id} id={task.id} title={task.title} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default BoardBody;
