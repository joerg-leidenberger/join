import { NavLink } from 'react-router-dom';
import { help, logo } from '../assets/img/img';
import { useAuth } from '../context/AuthContext';
import { getName } from '../api/api';
import { useEffect, useState } from 'react';

function Header() {
  const [initials, setInitials] = useState('');
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const loadName = async () => {
      const userName = await getName();

      if (userName && userName.name) {
        const words = userName.name.split(' ');
        const initials = words
          .slice(0, 2)
          .map((word: string) => word.charAt(0).toUpperCase())
          .join('');

        setInitials(initials);
      }
    };
    loadName();
  }, []);

  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='logo' />
      <input type='checkbox' id='menu-toggle' hidden></input>
      <label htmlFor='menu-toggle' className='header__menu'>
        <span>Kanban Project Management Tool</span>
        <NavLink to='../help'>
          <img className='header__help' src={help} alt='help' />
        </NavLink>
        <div className='header__user'>
          <span>{initials}</span>
        </div>
      </label>
      <div className='dropdown-content'>
        <div className='dropdown-content__menu'>
          <NavLink to='../legalnotice'>
            <div>Legal Notice</div>
          </NavLink>
          <NavLink to='../pricacypolicy'>
            <div>Privacy Policy</div>
          </NavLink>
          <div onClick={handleLogout}>Logout</div>
        </div>
      </div>
    </header>
  );
}
export default Header;
