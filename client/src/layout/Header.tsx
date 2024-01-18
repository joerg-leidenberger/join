import { help, logo } from '../assets/img/img';

function header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header__menu">
        <span>Kanban Project Management Tool</span>
        <img src={help} alt="help" />
        <div className="header__user">
          <span>SM</span>
        </div>
      </div>
    </header>
  );
}
export default header;
