import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import style from './Navigation.module.css';
import { authSelectors } from '../../redux/auth';
import { connect } from 'react-redux';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav className={style.itemLink}>
      <NavLink
        to={routes.homeView}
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <nav className={style.itemLink}>
          <NavLink
            to={routes.contactsView}
            className="NavLink"
            activeClassName="NavLinkActive"
          >
            Contacts
          </NavLink>
        </nav>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
