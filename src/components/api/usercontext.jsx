

import React, { createContext, useState } from 'react';

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const myName = "ibrahim";

  return (
    <UserContext.Provider value={{ user, setUser, myName }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
