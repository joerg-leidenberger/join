import PriorityBtn from './PriorityBtn';

function Priority() {
  return (
    <label>
      <div className='addTask__title'>Priority:</div>
      <div className='priority'>
        <PriorityBtn prio='Urgent' />
        <PriorityBtn prio='Medium' />
        <PriorityBtn prio='Low' />
      </div>
    </label>
  );
}
export default Priority;
