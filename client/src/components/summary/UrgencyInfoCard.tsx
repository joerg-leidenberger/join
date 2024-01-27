import { urgent } from '../../assets/img/img';

import TasksCount from './TasksCard';

function UrgencyInfoCard() {
  return (
    <div className='urgencyInfoCard'>
      <TasksCount image={urgent} title='Tasks Urgent' />
      <div className='urgencyInfoCard__line'></div>
      <div className='urgencyInfoCard__date-wrapper'>
        <div className='urgencyInfoCard__date-wrapper-date'>
          Oktober 16, 2022
        </div>
        <div className='urgencyInfoCard__date-wrapper-title'>
          Upcoming Deadline
        </div>
      </div>
    </div>
  );
}
export default UrgencyInfoCard;
