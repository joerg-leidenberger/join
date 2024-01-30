import { useState } from 'react';
import PriorityBtn from './PriorityBtn';

function Priority() {
  const [activeButton, setActiveButton] = useState('Medium');

  const setPrio = (prio: string) => {
    setActiveButton(prio);
  };

  return (
    <div>
      <div className='addTask__title'>Priority:</div>
      <div className='priority'>
        <PriorityBtn
          prio='Urgent'
          active={activeButton === 'Urgent'}
          onClick={() => setPrio('Urgent')}
        />
        <PriorityBtn
          prio='Medium'
          active={activeButton === 'Medium'}
          onClick={() => setPrio('Medium')}
        />
        <PriorityBtn
          prio='Low'
          active={activeButton === 'Low'}
          onClick={() => setPrio('Low')}
        />
      </div>
    </div>
  );
}
export default Priority;
