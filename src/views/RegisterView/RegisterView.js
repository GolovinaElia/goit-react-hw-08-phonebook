import React, { Component } from 'react';
import style from './RegisterView.module.css';
// import { connect } from 'react-redux';
// import { authOperations } from '../../redux/auth';

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
              name="number"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$\?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
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
              type="email"
              autoComplete="off"
              name="number"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$\?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Пароль должен быть не меньше 6 символов, состоять из букв нижнего регистра, букв верхнего регистра, цифр и не должен совпадать с именем и электронной почтой"
              required
              // value={this.state.number}
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

// const mapDispatchToProps = dispatch => ({
//   onSubmit: data => dispatch(authOperations.register(data)),
// });

export default RegisterView;