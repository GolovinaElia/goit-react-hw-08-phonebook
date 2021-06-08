import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import style from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav className={style.itemLink}>
      <NavLink
        exact
        to={routes.registerView}
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        Register
      </NavLink>
      <NavLink
        to={routes.loginView}
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        Login
      </NavLink>
    </nav>
  );
};
export default AuthNav;
