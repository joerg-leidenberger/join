import Description from '../components/addTask/Description';
import DueDate from '../components/addTask/DueDate';
import EnterTitle from '../components/addTask/EnterTitle';
import Priority from '../components/addTask/Priority';

function AddTask() {
  return (
    <div className='addTask'>
      <div className='addTask__form'>
        <form>
          <EnterTitle />
          <Description />
          <DueDate />
          <Priority />
        </form>
      </div>
    </div>
  );
}
export default AddTask;
