import React, { useContext } from 'react';
import { UserContext } from '../api/usercontext.jsx';

function Context() {
  const data = useContext(UserContext);  

  return (
    <div>
      hi {data.myName} how are you?
    </div>
  );
}

export default Context;
