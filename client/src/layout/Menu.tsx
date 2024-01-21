import { add_task, board, calendar, summary } from '../assets/img/img';

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <a href="#">
            <img src={summary} alt="summary icon" />
            <span>Summary</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={add_task} alt="add task icon" />
            <span>Add Task</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={board} alt="board icon" />
            <span>Board</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={calendar} alt="contacts icon" />
            <span>Contacts</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
