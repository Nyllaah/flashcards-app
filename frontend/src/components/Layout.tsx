import { Outlet } from 'react-router-dom';
import style from './css/Layout.module.css';

function Layout() {
  return (
    <div className={ style.container }>
      <Outlet />
    </div>
  )
}

export default Layout;