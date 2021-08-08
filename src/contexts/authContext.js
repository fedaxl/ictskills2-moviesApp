import React, { createContext, useState, useEffect } from "react"
//import { auth } from "../api/firebase"

export const AuthContext = createContext(null);


const AuthContextProvider = (props) => {
  //const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ username: null, password: null });

 // useEffect(() => {
 // auth.setIsAuthenticated(true);
 // }, [newUser.username]);

  const authenticate = (username, password) => {
    setUser({ username, password });
  };

  const isAuthenticated = user.username === null ? false : true

  const signout = () => {
    setTimeout(() => setUser( { username: null, password: null } ), 100);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        signout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider; 