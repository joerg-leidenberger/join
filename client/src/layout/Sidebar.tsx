import Legacy from '../components/Legacy';
import Menu from '../components/Menu';

function Sidebar() {
  return (
    <div className="sidebar">
      <Menu />
      <Legacy />
    </div>
  );
}
export default Sidebar;
