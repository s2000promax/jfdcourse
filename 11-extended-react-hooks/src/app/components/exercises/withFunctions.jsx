import React from 'react';
import CardWrapper from '../common/Card';

const withFunctions = (Component) => (props) => {
  return (
    <>
      <CardWrapper>
        <Component {...props} />
      </CardWrapper>
    </>
  );
};

export default withFunctions;