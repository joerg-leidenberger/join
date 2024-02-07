import UrgencyInfoCard from '../components/summary/UrgencyInfoCard';
import TasksInfoCard from '../components/summary/TasksInfoCard';
import Greeting from '../components/Greeting';
import {
  boardsummery,
  done,
  feedback,
  progress,
  todo,
} from '../assets/img/img';
import { useEffect, useState } from 'react';

type Task = {
  id: string;
  status: 'toDo' | 'progress' | 'feedback' | 'done';
  priority: 'Urgent';
  dueDate: string;
};
type CountTaskStatus = {
  toDo: number;
  progress: number;
  feedback: number;
  done: number;
};

type CountTaskUrgent = {
  Urgent: number;
};

function Summary() {
  const [tasks, setTasks] = useState(null);
  const [countTaskUrgent, setCountTaskUrgent] = useState({ Urgent: 0 });
  const [closestDueDate, setClosestDueDate] = useState('');
  const [countTaskStatus, setCountTaskStatus] = useState({
    toDo: 0,
    progress: 0,
    feedback: 0,
    done: 0,
  });

  useEffect(() => {
    const fetchTasks = async () => {
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
        const jsonData = await response.json();
        setTasks(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    if (tasks) {
      const statusCounts = (tasks as Task[]).reduce<CountTaskStatus>(
        (acc, task) => {
          acc[task.status] = (acc[task.status] || 0) + 1;
          return acc;
        },
        { toDo: 0, progress: 0, feedback: 0, done: 0 }
      );

      setCountTaskStatus(statusCounts);

      const urgentCounts = (tasks as Task[]).reduce<CountTaskUrgent>(
        (acc, task) => {
          acc[task.priority] = (acc[task.priority] || 0) + 1;
          return acc;
        },
        { Urgent: 0 }
      );

      setCountTaskUrgent(urgentCounts);

      if (tasks && (tasks as Task[]).length > 0) {
        const sortedTasks = [...(tasks as Task[])].sort((a, b) => {
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        });

        const closestTask = sortedTasks[0];
        if (closestTask) {
          const formattedDate = new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          }).format(new Date(closestTask.dueDate));

          setClosestDueDate(formattedDate);
        }
      }
    }
  }, [tasks]);

  return (
    <>
      <div className='summaryUser'>
        <Greeting />
        <div className='summaryUser__wrapper--top'>
          <UrgencyInfoCard
            count={countTaskUrgent.Urgent}
            deadline={closestDueDate}
          />
          <TasksInfoCard
            image={boardsummery}
            title='Task in Board'
            count={
              countTaskStatus.toDo +
              countTaskStatus.progress +
              countTaskStatus.feedback +
              countTaskStatus.done
            }
          />
        </div>
        <div className='summaryUser__wrapper--bottom'>
          <TasksInfoCard
            image={todo}
            title='Tasks To-do'
            count={countTaskStatus.toDo}
          />
          <TasksInfoCard
            image={progress}
            title='Task in Progress'
            count={countTaskStatus.progress}
          />
          <TasksInfoCard
            image={feedback}
            title='Awaiting Feedback'
            count={countTaskStatus.feedback}
          />
          <TasksInfoCard
            image={done}
            title={
              <span>
                Tasks <br /> Done
              </span>
            }
            count={countTaskStatus.done}
          />
        </div>
      </div>
    </>
  );
}
export default Summary;
