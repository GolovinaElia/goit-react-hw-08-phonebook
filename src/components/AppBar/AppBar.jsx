import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import style from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={style.AppBar}>
      <Navigation />
      <AuthNav />
    </header>
  );
};
export default AppBar;
