import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function Header() {
  const { authUserInfo, logout } = useContext(AuthContext);

  return (
    <div>
      <div className="loginFormHeaderDiv">
        <h1>FRIENDS DATABASE</h1>
        <div className="loginFormHeaderButtonDiv">
          {!authUserInfo ? (
            <div>
              <Link to="/login">
                <button>LOGIN</button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/friends">
                <button>FRIENDS LIST</button>
              </Link>
              <Link to="/friends/add">
                <button>ADD FRIEND</button>
              </Link>
              <button onClick={logout}>LOGOUT</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
