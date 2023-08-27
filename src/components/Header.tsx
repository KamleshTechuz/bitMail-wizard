import { logo } from "../assets";

const Header = () => {
  return (
    <header className="header_container">
      <div className="header_container_div">
        <img src={logo} className="header_img" />
        <h1 className="header_title">BitMail-Wizard</h1>
      </div>
    </header>
  );
};

export default Header;
