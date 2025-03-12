import { useState } from "react";
import "./header.scss";
import MenuBurger from "../MenuBurger/MenuBurger";
import menuCloseIcon from "../../assets/menuCloseIcon.svg";
import menuIcon from "../../assets/menu-burger.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen(!menuOpen);
  }
  return (
    <header className="header">
      <div className="container header-container">
        <MenuBurger onClick={handleClick}>
          {menuOpen ? (
            <img src={menuCloseIcon} alt="Close menu" />
          ) : (
            <img src={menuIcon} alt="Open menu" />
          )}
        </MenuBurger>
        <nav className={menuOpen ? "header-nav active" : "header-nav"}>
          <a className="header-navlink" href="/">
            Home
          </a>
          <a className="header-navlink" href="#works">
            Works
          </a>
          <a className="header-navlink" href="#blog">
            Blog
          </a>
        </nav>
      </div>
    </header>
  );
}
export default Header;
