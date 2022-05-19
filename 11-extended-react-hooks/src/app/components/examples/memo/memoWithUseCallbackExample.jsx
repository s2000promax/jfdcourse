import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const LogoutButton = ({ onLogOut }) => {
      useEffect(() => {
        console.log('render button');
      });
     return (
       <>
           <button
             className='btn btn-primary'
             onClick={onLogOut}
           >Logout</button>
       </>
     );
}

LogoutButton.propTypes = {
  onLogOut: PropTypes.func
}

function areEqual(prevState, nextState) {
  if (prevState.onLogOut !== nextState.onLogOut) {
    return false;
  } else {
    return true;
  }
}

const MemoizedLogoutButton = React.memo(LogoutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
  const [state, setState] = useState(false);
  const handleLogout = useCallback(() => {
    localStorage.removeItem('auth');
  }, [props]);
    return (
      <>
        <button
          className='btn btn-primary'
          onClick={() => setState(!state)}
        >Initiate Rerender</button>
        <MemoizedLogoutButton onLogOut={handleLogout} />
      </>
    );
};

export default MemoWithUseCallbackExample;
