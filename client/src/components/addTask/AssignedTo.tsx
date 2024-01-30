import { useState } from 'react';
import { arrowDropDown, checkButton } from '../../assets/img/img';

function AssignedTo() {
  const [showContactList, setShowContactList] = useState(false);
  const toggleContactList = () => {
    setShowContactList(!showContactList);
  };

  return (
    <label>
      <div className='assignedTo'>
        <div className='addTask__title'>
          Assigned to <span>(optional)</span>
        </div>
        <div className='assignedTo__inputContainer' onClick={toggleContactList}>
          <input
            className='assignedTo__input'
            type='text'
            id='assignedTo'
            placeholder='Select contacts to assign'
          ></input>
          <span className='assignedTo__arrowIcon'>
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
    </label>
  );
}
export default AssignedTo;
