import { connect } from 'react-redux';
import style from './UserMenu.module.css';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ name, email, onLogout }) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
