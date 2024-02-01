function TaskCard() {
  return (
    <div className='taskCard'>
      <div className='taskCard__category'>User Story</div>
      <div>
        <div className='taskCard__title'>
          Kochwelt Page & Recipe Recommender
        </div>
        <div className='taskCard__description'>
          Build start page with recipe recommendation...
        </div>
      </div>
      <div className='taskCard__subtasks'>1/2 Subtasks</div>
      <div className='taskCard__footer'>
        <div className='taskCard__assignedTo'></div>
        <div className='taskCard_priority'></div>
      </div>
    </div>
  );
}
export default TaskCard;
