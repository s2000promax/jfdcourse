import React from 'react';
import PropTypes from 'prop-types';

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
  return (
    <>
      <button onClick={!isAuth ? onLogin : onLogOut}>{!isAuth ? 'Login' : 'Logout'}</button>
    </>
  );
};
SimpleComponent.propTypes = {
  onLogin: PropTypes.func,
  onLogOut: PropTypes.func,
  isAuth: PropTypes.bool
};

export default SimpleComponent;