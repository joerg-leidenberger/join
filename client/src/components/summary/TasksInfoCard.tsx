import TasksCount from './TasksCard';

type Props = {
  image: string;
  title: string | React.ReactNode;
};

function TasksInfoCard({ image, title }: Props) {
  return <TasksCount image={image} title={title} />;
}
export default TasksInfoCard;
