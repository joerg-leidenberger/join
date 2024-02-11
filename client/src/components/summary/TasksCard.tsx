type Props = {
  image: string;
  title: string | React.ReactNode;
  count: string | number;
};

function TasksCard({ image, title, count }: Props) {
  const tasksCard: string =
    title === 'Tasks Urgent' ? 'urgentTasksCount' : 'tasksCard';

  const modify = () => {
    switch (title) {
      case 'Task in Board':
        return 'tasksCard-board';
      case 'Tasks To-do':
        return 'tasksCard-toDo';
      case 'Tasks Done':
        return 'tasksCard-done';
      default:
        return '';
    }
  };
  return (
    <div className={`${tasksCard} ${modify()}`}>
      <div className={tasksCard + '__container'}>
        <div className={tasksCard + '__wrapper'}>
          <div
            className={tasksCard + '__img'}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <span className={tasksCard + '__number'}>{count}</span>
        </div>
        <div className={tasksCard + '__title'}>{title}</div>
      </div>
    </div>
  );
}
export default TasksCard;
