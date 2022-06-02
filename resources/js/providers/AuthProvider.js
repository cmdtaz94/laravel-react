import React from "react";
import { performRequest } from "../helpers/axios";

let AuthContext = React.createContext({ authUser: () => {} });

function AuthProvider({ children }) {
  const authUser = () => {
    if (localStorage.getItem("authUser")) {
      return JSON.parse(localStorage.getItem("authUser")).user;
    }

    const success = (response) => {
      localStorage.setItem("authUser", JSON.stringify(response.data));
    };

    const fail = (error) => console.log(error);

    performRequest("GET", "auth-user", success, fail);

    return response.data;
  };

  return (
    <AuthContext.Provider value={{ authUser }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { AuthContext, AuthProvider, useAuth };
