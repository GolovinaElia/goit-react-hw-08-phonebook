import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import style from './Navigation.module.css';

const AuthNav = () => {
  return (
    <nav className={style.itemLink}>
      <NavLink
        exact
        to={routes.registerView}
        className={style.NavLink}
        activeClassName={style.NavLinkActive}
      >
        Register
      </NavLink>
      <NavLink
        to={routes.loginView}
        className={style.NavLink}
        activeClassName={style.NavLinkActive}
      >
        Login
      </NavLink>
    </nav>
  );
};
export default AuthNav;
