import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={style.itemLink}>
      <NavLink
        exact
        to={routes.home}
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        Home
      </NavLink>
      <NavLink
        to={routes.contactsView}
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        Contacts
      </NavLink>
    </nav>
  );
};
export default Navigation;