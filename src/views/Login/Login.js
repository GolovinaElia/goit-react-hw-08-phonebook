import React, { Component } from 'react';
import style from './Login.module.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
    this.reset();
  };

  reset = () => {
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <div className={style.container}>
        <h1 className={style.title}>Login Page</h1>
        <form className={style.containerForm} onSubmit={this.handleSubmit}>
          <label className={style.containerLabel}>
            Email
            <input
              className={style.input}
              type="email"
              autoComplete="off"
              name="email"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$\?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Название электронной почты должно состоять из букв, цифр и может содержать пробелы, тире, круглые скобки и должно сожержать @"
              required
              // value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <label className={style.containerLabel}>
            Password
            <input
              className={style.input}
              type="password"
              autoComplete="off"
              name="password"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$\?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Пароль должен быть не меньше 6 символов, состоять из букв нижнего регистра, букв верхнего регистра, цифр и не должен совпадать с именем и электронной почтой"
              required
              // value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button className={style.button} type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
