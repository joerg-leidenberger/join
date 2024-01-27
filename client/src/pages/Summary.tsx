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

function summary() {
  return (
    <>
      <div className='summaryUser'>
        <Greeting />
        <div className='summaryUser__wrapper--top'>
          <UrgencyInfoCard />
          <TasksInfoCard image={boardsummery} title='Task in Board' />
        </div>
        <div className='summaryUser__wrapper--bottom'>
          <TasksInfoCard image={todo} title='Tasks To-do' />
          <TasksInfoCard image={progress} title='Task in Progress' />
          <TasksInfoCard image={feedback} title='Awaiting Feedback' />
          <TasksInfoCard image={done} title='Tasks Done' />
        </div>
      </div>
    </>
  );
}
export default summary;
