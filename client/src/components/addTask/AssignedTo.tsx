import React, { useEffect, useState, useRef } from 'react';
import { arrowDropDown, checkButton } from '../../assets/img/img';

type AssignedToProps = {
  assignedTo: string[];
  onChange: (assignedTo: string[]) => void;
};

function AssignedTo({ assignedTo, onChange }: AssignedToProps) {
  const [assignedToInputValue, setAssignedToInputValue] = useState('');
  const [iconIsRotated, setIconIsRotated] = useState(false);
  const [showContactList, setShowContactList] = useState(false);
  const [placeholder, setPlaceholder] = useState('Select contacts to assign');
  const contactListRef = useRef<HTMLDivElement>(null);

  const handleIconRotate = () => {
    setIconIsRotated(!iconIsRotated);
  };

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
    setIconIsRotated(true);
  };

  const handleSelectContact = (contact: string) => {
    let updatedAssignedTo;
    if (assignedTo.includes(contact)) {
      updatedAssignedTo = assignedTo.filter((c) => c !== contact);
    } else {
      updatedAssignedTo = [...assignedTo, contact];
    }
    onChange(updatedAssignedTo);
  };

  useEffect(() => {
    const isPartOf = (element: Node | null, className: string): boolean => {
      while (element && element !== document.body) {
        if (
          element instanceof HTMLElement &&
          element.classList.contains(className)
        ) {
          return true;
        }
        element = element.parentNode;
      }
      return false;
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contactListRef.current &&
        !contactListRef.current.contains(event.target as Node) &&
        !isPartOf(event.target as Node, 'assignedTo__borderBottom')
      ) {
        setShowContactList(false);
        setIconIsRotated(false);
        setPlaceholder('Select contacts to assign');
      }
    };
    if (showContactList) {
      document.addEventListener('mouseup', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  });

  return (
    <>
      <div className='assignedTo'>
        <div className='addTask__title'>
          Assigned to <span>(optional)</span>
        </div>
        <div className='assignedTo__borderBottom'>
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
            <div
              className='assignedTo__icon'
              onClick={() => {
                toggleContactList();
                handleInputValue();
                handleIconRotate();
              }}
            >
              <img
                src={arrowDropDown}
                alt='arrow icon'
                className={`${
                  iconIsRotated
                    ? 'assignedTo__icon-rotateDown'
                    : 'assignedTo__icon-rotateUp'
                }`}
              />
            </div>
          </div>
        </div>
        {showContactList && (
          <div className='assignedTo__contactList' ref={contactListRef}>
            <div>
              <ul>
                <li onClick={() => handleSelectContact('Anton Mayer')}>
                  <div>
                    <div className='assignedTo__contactInitials'>AM</div>
                    <span className='assignedTo__contactName'>Anton Mayer</span>
                  </div>
                  <img
                    className={
                      assignedTo.includes('Anton Mayer')
                        ? 'assignedTo__checkbox assignedTo__checkbox--selected'
                        : 'assignedTo__checkbox'
                    }
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
