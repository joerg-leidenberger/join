import { urgent } from '../../assets/img/img';

import TasksCount from './TasksCard';

type Props = {
  count: string | number;
  deadline: string;
};

function UrgencyInfoCard({ count, deadline }: Props) {
  return (
    <div className='urgencyInfoCard'>
      <TasksCount image={urgent} title='Tasks Urgent' count={count} />
      <div className='urgencyInfoCard__line'></div>
      <div className='urgencyInfoCard__date-wrapper'>
        <div className='urgencyInfoCard__date-wrapper-date'>{deadline}</div>
        <div className='urgencyInfoCard__date-wrapper-title'>
          Upcoming Deadline
        </div>
      </div>
    </div>
  );
}
export default UrgencyInfoCard;
