import { useState } from 'react';
import {
  addSVG,
  checkSVG,
  closeSVG,
  deleteSVG,
  editSVG,
} from '../../assets/img/img';

type SubtasksProps = {
  subtasks: string[];
  onChange: (subtasks: string[]) => void;
};

function Subtasks({ subtasks, onChange }: SubtasksProps) {
  const [inputValue, setInputValue] = useState('');
  const [SubtaskInputValue, setSubtaskInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubtaskInputValue(e.target.value);
  };

  const handleAddSubtask = () => {
    if (!inputValue.trim()) return;
    onChange([...subtasks, inputValue]);
    setInputValue(''); // Reset input after adding
  };

  return (
    <div className='subtasks'>
      <div className='addTask__title'>
        Subtasks <span>(optional)</span>
      </div>
      <div className='subtasks__borderBottom'>
        <div className='subtasks__inputContainer'>
          <input
            className='subtasks__input'
            type='text'
            id='subtasks'
            placeholder='Add new subtask'
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleAddSubtask}
          ></input>
          {!SubtaskInputValue && (
            <div className='subtasks__icon'>{addSVG()}</div>
          )}
          {SubtaskInputValue && (
            <div className='subtasks__iconContainer'>
              <div className='subtasks__icon'>{closeSVG()}</div>
              <div className='subtasks__line'></div>
              <div className='subtasks__icon'>{checkSVG()}</div>
            </div>
          )}
        </div>
      </div>
      <div className='subtasks__list'>
        <ul>
          <li>
            <div>Test 2</div>
            <div className='subtasks__iconContainer subtasks__iconContainer-list'>
              <div className='subtasks__icon'>{editSVG()}</div>
              <div className='subtasks__line'></div>
              <div className='subtasks__icon'>{deleteSVG()}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Subtasks;
