import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUserInfo, setAuthUserInfo] = useLocalStorage("s11d2", null);

  const history = useHistory();
  const login = (userInfo) => {
    axios
      .post("https://nextgen-project.onrender.com/api/s11d2/login", userInfo)
      .then((res) => {
        setAuthUserInfo(res.data);
        history.push("/friends");
      })
      .catch((error) => console.log(error));
  };
  const logout = () => {
    setAuthUserInfo(null);
  };

  return (
    <AuthContext.Provider
      value={{
        authUserInfo,
        setAuthUserInfo,

        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
