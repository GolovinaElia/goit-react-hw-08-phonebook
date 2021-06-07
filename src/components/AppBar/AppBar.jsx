import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import style from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
  <header className={style.AppBar}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);
export default AppBar;
