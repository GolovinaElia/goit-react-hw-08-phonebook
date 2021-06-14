import { connect } from 'react-redux';
import style from './UserMenu.module.css';
import { authSelectors, authOperations } from '../../redux/auth';
import PropTypes from 'prop-types';

const UserMenu = ({ email, onLogout }) => {
  return (
    <div className={style.container}>
      <span>{email}</span>
      <button className={style.button} type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  email: authSelectors.getUseremail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

UserMenu.propTypes = {
  email: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
