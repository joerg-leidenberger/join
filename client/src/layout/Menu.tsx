import { add_task, board, calendar, summary } from '../assets/img/img';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <div className='menu'>
      <ul>
        <li>
          <NavLink
            to='../summary'
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <img src={summary} alt='summary icon' />
            <span>Summary</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='../addTask'
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <img src={add_task} alt='add task icon' />
            <span>Add Task</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='../board'
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <img src={board} alt='board icon' />
            <span>Board</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='../contacts'
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <img src={calendar} alt='contacts icon' />
            <span>Contacts</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
