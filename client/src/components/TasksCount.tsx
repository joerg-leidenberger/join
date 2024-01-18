import { boardsummery, urgent } from '../assets/img/img';

type Props = {
  image: string;
  title: string;
};

function TasksBtn({ image, title }: Props) {
  const isTasksCount = image !== urgent ? 'tasksCount' : 'urgentTasksCount';
  const isBoardTask = image !== boardsummery ? '' : '19.1rem';

  return (
    <div className={isTasksCount} style={{ height: `${isBoardTask}` }}>
      <div className={isTasksCount + '__wrapper'}>
        <div
          className={isTasksCount + '__img'}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <span className={isTasksCount + '__number'}>1</span>
      </div>
      <div className={isTasksCount + '__title'}>{title}</div>
    </div>
  );
}
export default TasksBtn;
