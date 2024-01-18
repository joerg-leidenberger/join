import { urgent } from '../assets/img/img';

import TasksCount from './TasksCount';

function UrgencyInfoBtn() {
  return (
    <div className="urgencyInfoBtn">
      <TasksCount image={urgent} title="Tasks Urgent" />
      <div className="urgencyInfoBtn__line"></div>
      <div className="urgencyInfoBtn__date-wrapper">
        <div className="urgencyInfoBtn__date-wrapper-date">
          Oktober 16, 2022
        </div>
        <div className="urgencyInfoBtn__date-wrapper-title">
          Upcoming Deadline
        </div>
      </div>
    </div>
  );
}
export default UrgencyInfoBtn;
