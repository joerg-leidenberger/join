import React, { useState } from 'react';
import {
  addSVG,
  checkSVG,
  closeSVG,
  deleteSVG,
  editSVG,
} from '../../assets/img/img';
import { SubtasksProps } from '../../types/TaskTypes';

function Subtasks({ subtasks, onChange }: SubtasksProps) {
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleEditSubtask = (id: string) => {
    const subtask = subtasks.find((subtask) => subtask.id === id);
    if (subtask) {
      setEditIndex(subtasks.indexOf(subtask));
      setEditValue(subtask.value);
    }
  };

  const handleSaveEdit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const updatedSubtasks = subtasks.map((subtask) =>
        subtask.id === subtasks[editIndex!].id
          ? { ...subtask, value: editValue }
          : subtask
      );
      onChange(updatedSubtasks);
      setEditIndex(null);
      setEditValue('');
    }
  };

  const handleSaveEditOnClick = () => {
    const updatedSubtasks = subtasks.map((subtask) =>
      subtask.id === subtasks[editIndex!].id
        ? { ...subtask, value: editValue }
        : subtask
    );
    onChange(updatedSubtasks);
    setEditIndex(null);
    setEditValue('');
  };

  const handleAddSubtask = () => {
    if (!inputValue.trim()) return;
    const newSubtask = { id: Date.now().toString(), value: inputValue };
    const newSubtasks = [...subtasks, newSubtask];
    onChange(newSubtasks);
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSubtask();
    }
  };

  const handleDeleteSubtask = (id: string) => {
    const newSubtasks = subtasks.filter((subtask) => subtask.id !== id);
    onChange(newSubtasks);
    setEditIndex(null);
    setEditValue('');
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
            onKeyDown={handleKeyDown}
          ></input>
          {!inputValue && <div className='subtasks__icon'>{addSVG()}</div>}
          {inputValue && (
            <div className='subtasks__iconContainer'>
              <div className='subtasks__icon' onClick={() => setInputValue('')}>
                {closeSVG()}
              </div>
              <div className='subtasks__line'></div>
              <div className='subtasks__icon' onClick={handleAddSubtask}>
                {checkSVG()}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='subtasks__list'>
        <ul>
          {subtasks.map((subtask, index) => (
            <li
              key={subtask.id}
              onDoubleClick={() => handleEditSubtask(subtask.id)}
            >
              {editIndex === index ? (
                <>
                  <input
                    className='subtasks__editSubtaskInput'
                    value={editValue}
                    onChange={handleEditInputChange}
                    onKeyDown={handleSaveEdit}
                    autoFocus
                  ></input>
                  <div className='subtasks__iconContainer subtasks__iconContainer-list'>
                    <div
                      className='subtasks__icon'
                      onClick={() => handleDeleteSubtask(subtask.id)}
                    >
                      {deleteSVG()}
                    </div>
                    <div className='subtasks__line'></div>
                    <div
                      className='subtasks__icon'
                      onClick={handleSaveEditOnClick}
                    >
                      {checkSVG()}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>{subtask.value}</div>
                  <div className='subtasks__iconContainer subtasks__iconContainer-list'>
                    <div
                      className='subtasks__icon'
                      onClick={() => handleEditSubtask(subtask.id)}
                    >
                      {editSVG()}
                    </div>
                    <div className='subtasks__line'></div>
                    <div
                      className='subtasks__icon'
                      onClick={() => handleDeleteSubtask(subtask.id)}
                    >
                      {deleteSVG()}
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Subtasks;
