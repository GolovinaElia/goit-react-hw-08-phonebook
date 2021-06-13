import React, { Component } from 'react';
import style from './RegisterView.module.css';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div className={style.container}>
        <h1 className={style.title}>Register Page</h1>
        <form className={style.containerForm} onSubmit={this.handleSubmit}>
          <div className={style.blockinput}>
            <i className={style.icon}></i>
            <input
              className={style.input}
              type="text"
              autoFocus
              placeholder="Name"
              autoComplete="off"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className={style.blockinput}>
            <i className={style.icon}></i>
            <input
              className={style.input}
              type="email"
              placeholder="Email"
              autoComplete="off"
              name="email"
              title="Название электронной почты должно состоять из букв, цифр и должно содержать @"
              required
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className={style.blockinput}>
            <i className={style.icon}></i>
            <input
              className={style.input}
              type="password"
              placeholder="Password"
              autoComplete="off"
              name="password"
              title="Пароль должен быть не меньше 6 символов, состоять из букв нижнего регистра, букв верхнего регистра, цифр и не должен совпадать с именем или электронной почтой"
              required
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <button className={style.button} type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
