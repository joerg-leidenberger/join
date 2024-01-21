import Legacy from '../components/Legacy';
import Menu from '../layout/Menu';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Menu />
      <Legacy />
    </div>
  );
}
export default Sidebar;
