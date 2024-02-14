import React from 'react';
import { useTaskCardPortal } from '../../hooks/useTaskCardPortal';
import { lowSVG, mediumSVG, urgentSVG } from '../../assets/img/img';

type Props = {
  id: string;
  title: string;
  description: string;
  category: string;
  totalSubtasks: number;
  dueDate: string;
  priority: string;
  subtasks: [];
};

function TaskCard({
  id,
  title,
  description,
  category,
  totalSubtasks,
  dueDate,
  priority,
  subtasks,
}: Props) {
  const { openPortal } = useTaskCardPortal();
  const handleClick = () => {
    openPortal({
      id,
      title,
      description,
      category,
      totalSubtasks,
      dueDate,
      priority,
      subtasks,
    });
  };
  const priorityIcon = () => {
    switch (priority) {
      case 'Urgent':
        return urgentSVG();
      case 'Low':
        return lowSVG();
      case 'Medium':
        return mediumSVG();
    }
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const categoryStyle =
    category === 'Technical Task'
      ? { backgroundColor: 'hsla(218, 100%, 50%, 1)' }
      : {};

  return (
    <div
      className='taskCard'
      draggable='true'
      onDragStart={handleDragStart}
      onClick={handleClick}
    >
      <div className='taskCard__category' style={categoryStyle}>
        {category}
      </div>
      <div>
        <div className='taskCard__title'>{title}</div>
        <div className='taskCard__description'>{description}</div>
      </div>
      {totalSubtasks > 0 && (
        <div className='taskCard__subtasks'>
          <div className='taskCard__progressbar__container'>
            <div
              className='taskCard__progressbar'
              style={{ width: '100%' }}
            ></div>
          </div>
          <div>{totalSubtasks} Subtasks</div>
        </div>
      )}
      <div className='taskCard__footer'>
        <div className='taskCard__assignedTo'></div>
        <div className='taskCard__priority'>{priorityIcon()}</div>
      </div>
    </div>
  );
}

export default TaskCard;
