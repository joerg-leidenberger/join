import PriorityBtn from './PriorityBtn';

function Priority() {
  return (
    <label>
      Priority: <br />
      <div className='priority'>
        <PriorityBtn prio='Urgent' />
        <PriorityBtn prio='Medium' />
        <PriorityBtn prio='Low' />
      </div>
    </label>
  );
}
export default Priority;
