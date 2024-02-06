import { help, logo } from '../assets/img/img';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout(); // Aufruf der logout-Funktion aus dem AuthContext
  };

  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='logo' />
      <div className='header__menu'>
        <span>Kanban Project Management Tool</span>
        <img src={help} alt='help' />
        <div className='header__user' onClick={handleLogout}>
          <span>SM</span>
        </div>
      </div>
    </header>
  );
}
export default Header;
