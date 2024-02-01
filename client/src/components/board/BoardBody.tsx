import NoTask from './NoTask';
import TaskCard from './TaskCard';

function boardBody() {
  return (
    <div className='boardBody'>
      <div className='boardBody__column boardBody__toDo'>
        <NoTask />
      </div>
      <div className='boardBody__column boardBody__progress'>
        <TaskCard />
      </div>
      <div className='boardBody__column boardBody__feedback'></div>
      <div className='boardBody__column boardBody__done'></div>
    </div>
  );
}
export default boardBody;
