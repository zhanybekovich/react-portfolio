import MenuBurger from "../MenuBurger/MenuBurger";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <MenuBurger />
        <nav className="header-nav">
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
