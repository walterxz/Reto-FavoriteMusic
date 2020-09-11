import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import '../styles/components/Login.styl';

const Login = props => {
  const [form, setValues] = useState({
    email: '',
    id: '',
    name: '',
  });

  const updateInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <div className="login__container">
      <form className="login__box" onSubmit={handleSubmit}>
        <label htmlFor="">Usuario</label>
        <input type="text" onChange={updateInput} name="email" />
        <label htmlFor="">Contraseña</label>
        <input type="password" onChange={updateInput} name="password" />
        <button className="login__btn">LOG IN</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

Login.propTypes = {
  loginRequest: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Login);
