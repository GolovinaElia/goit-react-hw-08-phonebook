import { connect } from 'react-redux';
import Nav from '../Navigation/Nav';
import AuthNav from '../Navigation/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { authSelectors } from '../../redux/auth';
import style from './AppBar.module.css';
import PropTypes from 'prop-types';

const AppBar = ({ isAuthenticated }) => (
  <header className={style.AppBar}>
    <Nav />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AppBar);
