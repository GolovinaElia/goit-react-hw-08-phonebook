import style from './HomeView.module.css';

const HomeView = () => (
  <div className={style.container}>
    <h1 className={style.title}>PHONEBOOK</h1>
    <p className={style.item}>
      Please enter your account / register and your phones are always at hand
    </p>
  </div>
);

export default HomeView;
