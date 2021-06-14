import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import style from './Navigation.module.css';
import { authSelectors } from '../../redux/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Nav = ({ isAuthenticated }) => {
  return (
    <nav className={style.itemLink}>
      <NavLink
        exact
        to={routes.homeView}
        className={style.NavLink}
        activeClassName={style.NavLinkActive}
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <nav className={style.itemLink}>
          <NavLink
            to={routes.contactsView}
            className={style.NavLink}
            activeClassName={style.NavLinkActive}
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

Nav.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Nav);
