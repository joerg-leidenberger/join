import React from 'react';

type Props = {
  id: string;
  title: string;
  description: string;
  category: string;
};

function TaskCard({ id, title, description, category }: Props) {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const categoryStyle =
    category === 'Technical Task'
      ? { backgroundColor: 'hsla(218, 100%, 50%, 1)' }
      : {};

  return (
    <div className='taskCard' draggable='true' onDragStart={handleDragStart}>
      <div className='taskCard__category' style={categoryStyle}>
        {category}
      </div>
      <div>
        <div className='taskCard__title'>{title}</div>
        <div className='taskCard__description'>{description}</div>
      </div>
      <div className='taskCard__subtasks'>
        <div className='taskCard__progressbar__container'>
          <div
            className='taskCard__progressbar'
            style={{ width: '100%' }}
          ></div>
        </div>
        <div>1/2 Subtasks</div>
      </div>
      <div className='taskCard__footer'>
        <div className='taskCard__assignedTo'></div>
        <div className='taskCard__priority'></div>
      </div>
    </div>
  );
}

export default TaskCard;
