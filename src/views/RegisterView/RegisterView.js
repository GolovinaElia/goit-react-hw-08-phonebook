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
    return (
      <div className={style.container}>
        <h1 className={style.title}>Register Page</h1>
        <form className={style.containerForm} onSubmit={this.handleSubmit}>
          <label className={style.containerLabel}>
            Name
            <input
              className={style.input}
              type="text"
              autoComplete="off"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              // value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label className={style.containerLabel}>
            Email
            <input
              className={style.input}
              type="email"
              autoComplete="off"
              name="email"
              // title="Название электронной почты должно состоять из букв, цифр и может содержать пробелы, тире, круглые скобки и должно содержать @"
              required
              // value={this.state.email}
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
              // title="Пароль должен быть не меньше 6 символов, состоять из букв нижнего регистра, букв верхнего регистра, цифр и не должен совпадать с именем и электронной почтой"
              required
              // value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
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
