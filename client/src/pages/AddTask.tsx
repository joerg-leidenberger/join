import Description from '../components/addTask/Description';
import EnterTitle from '../components/addTask/EnterTitle';
import PriorityBtn from '../components/addTask/PriorityBtn';

function AddTask() {
  return (
    <div className='addTask'>
      <div className='addTask__form'>
        <form>
          <EnterTitle />
          <Description />
          <label>
            Priority: <br />
            <div>
              <PriorityBtn />
              <PriorityBtn />
              <PriorityBtn />
            </div>
          </label>
        </form>
      </div>
    </div>
  );
}
export default AddTask;
