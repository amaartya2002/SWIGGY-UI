import { APP_LOGO } from "../utils/common";
import { useState } from "react";

const Header = () => {
  const [reactLoginBtn, setReactLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="img-element">
        <img src={APP_LOGO} alt="app-logo"></img>
      </div>
      <div className="header-links">
        <ul>
          <li>About</li>
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
