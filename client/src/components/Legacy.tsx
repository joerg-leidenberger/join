import { NavLink } from 'react-router-dom';

function Legacy() {
  return (
    <div className='legacy'>
      <NavLink
        to='../privacypolicy'
        className={({ isActive }) => (isActive ? 'active-link-legacy' : '')}
      >
        Privacy Policy
      </NavLink>
      <NavLink
        to='../legalnotice'
        className={({ isActive }) => (isActive ? 'active-link-legacy' : '')}
      >
        Legal notice
      </NavLink>
    </div>
  );
}
export default Legacy;
