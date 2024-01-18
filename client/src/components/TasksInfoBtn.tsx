import TasksCount from './TasksCount';

type Props = {
  image: string;
  title: string;
};

function TasksInfoBtn({ image, title }: Props) {
  return <TasksCount image={image} title={title} />;
}
export default TasksInfoBtn;
