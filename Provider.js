// Provider.js
import React from 'react';
import Prvider from './Redux/Prvider';

const Provider = ({ children }) => {
  return (
    <Prvider>
      {children}
    </Prvider>
  );
};

export default Provider;
