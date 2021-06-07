import style from './UserMenu.module.css';

const UserMenu = ({ email, name, onLogout }) => {
  return (
    <div className={style.container}>
      <a href="mailto:info@devstudio.com">{email}</a>
      <span>Welcome, {name}</span>
      <button className={style.button} type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};
export default UserMenu;
