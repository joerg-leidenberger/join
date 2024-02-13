import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  closeSVG,
  deleteSVG,
  editSVG,
  lowSVG,
  mediumSVG,
} from '../../assets/img/img';
import { urgentSVG } from '../../assets/img/img';

interface Subtask {
  value: string;
}

interface TaskData {
  id: string;
  title: string;
  description: string;
  category: string;
  subtasks: Subtask[];
  totalSubtasks: number;
  dueDate: string;
  priority: string;
  assignedTo?: Subtask[];
}

interface TaskDetailsPortalProps {
  task: TaskData;
  onClose: () => void;
}

const TaskCardPortal = ({ task, onClose }: TaskDetailsPortalProps) => {
  const portalRoot = document.getElementById('portal-root');
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(task.dueDate));

  const priorityIcon = (task: TaskData) => {
    switch (task.priority) {
      case 'Urgent':
        return urgentSVG();
      case 'Low':
        return lowSVG();
      case 'Medium':
        return mediumSVG();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!portalRoot) return null;

  const categoryStyle =
    task.category === 'Technical Task'
      ? { backgroundColor: 'hsla(218, 100%, 50%, 1)' }
      : {};
  console.log(task);

  return ReactDOM.createPortal(
    <div className='taskCardPortal__container' onClick={onClose}>
      <div className='taskCardPortal' onClick={(e) => e.stopPropagation()}>
        <div className='taskCardPortal__category__container'>
          <div className='taskCardPortal__category' style={categoryStyle}>
            {task.category}
          </div>
          <div className='taskCardPortal__close' onClick={onClose}>
            {closeSVG()}
          </div>
        </div>
        <div className='taskCardPortal__title'>{task.title}</div>
        <div className='taskCardPortal__description'>{task.description}</div>
        <div className='taskCardPortal__dueDate'>
          <div className='taskCardPortal__label'>Due date:</div>
          <div className='taskCardPortal__dueDate-content'>{formattedDate}</div>
        </div>
        <div className='taskCardPortal__priority'>
          <div className='taskCardPortal__label'>Priority:</div>
          <div className='taskCardPortal__priority-content'>
            <div>{task.priority}</div>
            <div>{priorityIcon(task)}</div>
          </div>
        </div>
        {task.assignedTo && (
          <div className='taskCardPortal__assignedTo'>
            <div className='taskCardPortal__label'>Assigned to:</div>
          </div>
        )}
        {task.subtasks.length > 0 && (
          <div className='taskCardPortal__subtask'>
            <div className='taskCardPortal__label'>Subtasks</div>
            <div>
              <ul>
                {task.subtasks?.map((subtask, index) => (
                  <li key={index}>{subtask.value}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className='taskCardPortal__buttons'>
          <div className='taskCardPortal__buttons__wrapper'>
            <div className='taskCardPortal__buttons-delete'>
              <div>{deleteSVG()}</div>
              <div>Delete</div>
            </div>
            <div className='subtasks__line'></div>
            <div className='taskCardPortal__buttons-edit'>
              <div>{editSVG()}</div>
              <div>Edit</div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    portalRoot
  );
};

export default TaskCardPortal;
