import PriorityBtn from './PriorityBtn';

function Priority() {
  return (
    <div>
      <div className='addTask__title'>Priority:</div>
      <div className='priority'>
        <PriorityBtn prio='Urgent' />
        <PriorityBtn prio='Medium' />
        <PriorityBtn prio='Low' />
      </div>
    </div>
  );
}
export default Priority;
