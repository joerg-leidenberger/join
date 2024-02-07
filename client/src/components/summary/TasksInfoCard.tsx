import TasksCount from './TasksCard';

type Props = {
  image: string;
  title: string | React.ReactNode;
  count: string | number;
};

function TasksInfoCard({ image, title, count }: Props) {
  return <TasksCount image={image} title={title} count={count} />;
}
export default TasksInfoCard;
