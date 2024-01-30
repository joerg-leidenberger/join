import React, { useState } from 'react';
import { arrowDropDown, checkButton } from '../../assets/img/img';

function AssignedTo() {
  const [assignedToInputValue, setAssignedToInputValue] = useState('');
  const [showContactList, setShowContactList] = useState(false);
  const [placeholder, setPlaceholder] = useState('Select contacts to assign');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAssignedToInputValue(e.target.value);
  };

  const handleInputValue = () => {
    if (showContactList) {
      setAssignedToInputValue('');
      (document.activeElement as HTMLInputElement).blur();
      setPlaceholder('Select contacts to assign');
    }
  };

  const toggleContactList = () => {
    setShowContactList(!showContactList);
  };

  const openContactList = () => {
    setShowContactList(true);
    setPlaceholder('');
  };

  return (
    <>
      <div className='assignedTo'>
        <div className='addTask__title'>
          Assigned to <span>(optional)</span>
        </div>
        <div className='assignedTo__inputContainer'>
          <input
            className='assignedTo__input'
            type='text'
            id='assignedTo'
            placeholder={placeholder}
            onClick={openContactList}
            onChange={handleInputChange}
            value={assignedToInputValue}
          ></input>
          <span
            className='assignedTo__arrowIcon'
            onClick={() => {
              toggleContactList();
              handleInputValue();
            }}
          >
            <img src={arrowDropDown} alt='arrow icon' />
          </span>
        </div>
        {showContactList && (
          <div className='assignedTo__contactList'>
            <div>
              <ul>
                <li>
                  <div>
                    <div className='assignedTo__contactInitials'>AM</div>
                    <span className='assignedTo__contactName'>Anton Mayer</span>
                  </div>
                  <img
                    className='assignedTo__checkbox'
                    src={checkButton}
                    alt='checkbox icon'
                  />
                </li>
                <li>
                  <div>
                    <div className='assignedTo__contactInitials'>AM</div>
                    <span className='assignedTo__contactName'>Anton Mayer</span>
                  </div>
                  <img
                    className='assignedTo__checkbox'
                    src={checkButton}
                    alt='checkbox icon'
                  />
                </li>
                <li>
                  <div>
                    <div className='assignedTo__contactInitials'>AM</div>
                    <span className='assignedTo__contactName'>Anton Mayer</span>
                  </div>
                  <img
                    className='assignedTo__checkbox'
                    src={checkButton}
                    alt='checkbox icon'
                  />
                </li>
                <li>
                  <div>
                    <div className='assignedTo__contactInitials'>AM</div>
                    <span className='assignedTo__contactName'>Anton Mayer</span>
                  </div>
                  <img
                    className='assignedTo__checkbox'
                    src={checkButton}
                    alt='checkbox icon'
                  />
                </li>
                <li>
                  <div>
                    <div className='assignedTo__contactInitials'>AM</div>
                    <span className='assignedTo__contactName'>Anton Mayer</span>
                  </div>
                  <img
                    className='assignedTo__checkbox'
                    src={checkButton}
                    alt='checkbox icon'
                  />
                </li>
                <li>
                  <div>
                    <div className='assignedTo__contactInitials'>AM</div>
                    <span className='assignedTo__contactName'>Anton Mayer</span>
                  </div>
                  <img
                    className='assignedTo__checkbox'
                    src={checkButton}
                    alt='checkbox icon'
                  />
                </li>
                <li>
                  <div>
                    <div className='assignedTo__contactInitials'>AM</div>
                    <span className='assignedTo__contactName'>Anton Mayer</span>
                  </div>
                  <img
                    className='assignedTo__checkbox'
                    src={checkButton}
                    alt='checkbox icon'
                  />
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default AssignedTo;
