import { boardsummery, urgent } from '../../assets/img/img';

type Props = {
  image: string;
  title: string | React.ReactNode;
};

function TasksCard({ image, title }: Props) {
  const isTasksCount = image !== urgent ? 'tasksCount' : 'urgentTasksCount';
  const isBoardTask = image !== boardsummery ? '' : '19.1rem';

  return (
    <div className={isTasksCount} style={{ height: `${isBoardTask}` }}>
      <div className={isTasksCount + '__container'}>
        <div className={isTasksCount + '__wrapper'}>
          <div
            className={isTasksCount + '__img'}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <span className={isTasksCount + '__number'}>1</span>
        </div>
        <div className={isTasksCount + '__title'}>{title}</div>
      </div>
    </div>
  );
}
export default TasksCard;
