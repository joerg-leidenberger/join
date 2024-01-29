import { arrowDropDown, checkButton } from '../../assets/img/img';

function AssignedTo() {
  return (
    <label>
      <div className='assignedTo'>
        <div className='addTask__title'>
          Assigned to <span>(optional)</span>
        </div>
        <div className='assignedTo__inputContainer'>
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
      </div>
    </label>
  );
}
export default AssignedTo;
