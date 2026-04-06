import { APP_LOGO } from "../utils/common";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [reactLoginBtn, setReactLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="img-element">
        <img src={APP_LOGO} alt="app-logo"></img>
      </div>
      <div className="header-links">
        <ul>
          <Link to={"/about"}>About</Link>
          <li>Help</li>
          <li>SignIn</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              reactLoginBtn === "Login"
                ? setReactLoginBtn("Logout")
                : setReactLoginBtn("Login");
            }}
          >
            {reactLoginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
