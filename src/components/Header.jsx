import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from "../actions";

import PropTypes from 'prop-types';
import '../styles/components/Header.styl';

const Header = props => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;
  // const HeaderClass = classNames('header', {
  //   isLogin,
  //   isRegister,
  // });
  const handleLogout = () => {
    props.logoutRequest({});
  };
  return (
    <div>
      <nav>
        <ul className="menu">
          <li className="logo">
            <a href="#">My Music</a>
          </li>
          <li className="item">
            {hasUser ? <a href="#">Bienvenido {user.email}</a> : null}
          </li>
          {hasUser ? (
            <li className="item">
              <a href="#logout" onClick={handleLogout}>
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <>
              <li className="item">
                <Link to="/login">LOG IN</Link>
              </li>
              {/* <li className="item">
                <Link to="/register">REGISTER</Link>
              </li> */}
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    myList: state.myList,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

Header.propTypes = {
  user: PropTypes.object,
  isLogin: PropTypes.bool,
  isRegister: PropTypes.bool,
  logoutRequest: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
