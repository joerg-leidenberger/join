import AssignedTo from '../components/addTask/AssignedTo';
import Category from '../components/addTask/Category';
import Description from '../components/addTask/Description';
import DueDate from '../components/addTask/DueDate';
import EnterTitle from '../components/addTask/EnterTitle';
import Priority from '../components/addTask/Priority';
import Subtasks from '../components/addTask/Subtasks';

function AddTask() {
  return (
    <div className='addTask'>
      <div className='addTask__form'>
        <form>
          <EnterTitle />
          <Description />
          <DueDate />
          <Priority />
          <AssignedTo />
          <Category />
          <Subtasks />
        </form>
      </div>
    </div>
  );
}
export default AddTask;
