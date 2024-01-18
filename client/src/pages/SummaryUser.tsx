import UrgencyInfoBtn from '../components/UrgencyInfoBtn';
import TasksInfoBtn from '../components/TasksInfoBtn';
import Layout from '../layout/Layout';
import Greeting from '../components/Greeting';
import {
  boardsummery,
  done,
  feedback,
  progress,
  todo,
} from '../assets/img/img';

function summary() {
  return (
    <>
      <Layout>
        <div className="summaryUser">
          <Greeting />
          <div className="summaryUser__wrapper--top">
            <UrgencyInfoBtn />
            <TasksInfoBtn image={boardsummery} title="Task in Board" />
          </div>
          <div className="summaryUser__wrapper--bottom">
            <TasksInfoBtn image={todo} title="Tasks To-do" />
            <TasksInfoBtn image={progress} title="Task in Progress" />
            <TasksInfoBtn image={feedback} title="Awaiting Feedback" />
            <TasksInfoBtn image={done} title="Tasks Done" />
          </div>
        </div>
      </Layout>
    </>
  );
}
export default summary;
