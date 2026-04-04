import { APP_LOGO } from "../utils/common";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
