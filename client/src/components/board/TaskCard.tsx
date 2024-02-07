import React from 'react';

type Props = {
  id: string;
  title: string;
  description: string;
};

function TaskCard({ id, title, description }: Props) {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', id);
  };

  return (
    <div className='taskCard' draggable='true' onDragStart={handleDragStart}>
      <div className='taskCard__category'>User Story</div>
      <div>
        <div className='taskCard__title'>{title}</div>
        <div className='taskCard__description'>{description}</div>
      </div>
      <div className='taskCard__subtasks'>1/2 Subtasks</div>
      <div className='taskCard__footer'>
        <div className='taskCard__assignedTo'></div>
        <div className='taskCard__priority'></div>
      </div>
    </div>
  );
}

export default TaskCard;
