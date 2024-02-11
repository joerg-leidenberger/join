import { NavLink } from 'react-router-dom';
import { help, logo } from '../assets/img/img';
import { useAuth } from '../context/AuthContext';
import { getName } from '../api/api';
import { useEffect, useRef, useState } from 'react';

function Header() {
  const [initials, setInitials] = useState('');
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };

  const menuToggleRef = useRef<HTMLInputElement | null>(null);
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);
  const closeMenu = () => {
    const menuToggle = document.getElementById(
      'menu-toggle'
    ) as HTMLInputElement;
    if (menuToggle) menuToggle.checked = false;
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuToggleRef.current &&
        !menuToggleRef.current.contains(event.target as Node) &&
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

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
      <NavLink to='../'>
        <img className='header__logo' src={logo} alt='logo' />
      </NavLink>
      <input
        ref={menuToggleRef}
        type='checkbox'
        id='menu-toggle'
        hidden
      ></input>
      <label htmlFor='menu-toggle' className='header__menu'>
        <span>Kanban Project Management Tool</span>
        <NavLink to='../help'>
          <img className='header__help' src={help} alt='help' />
        </NavLink>
        <div className='header__user'>
          <span>{initials}</span>
        </div>
      </label>
      <div className='dropdown-content' ref={dropdownMenuRef}>
        <div className='dropdown-content__menu'>
          <NavLink to='../legalnotice' onClick={closeMenu}>
            <div>Legal Notice</div>
          </NavLink>
          <NavLink to='../privacypolicy' onClick={closeMenu}>
            <div>Privacy Policy</div>
          </NavLink>
          <div onClick={handleLogout}>Logout</div>
        </div>
      </div>
    </header>
  );
}
export default Header;
