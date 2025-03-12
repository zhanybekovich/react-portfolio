import "./menu-burger.scss";
function MenuBurger({ onClick, children }) {
  return (
    <button onClick={onClick} type="button" className="menu-burger">
      {children}
    </button>
  );
}
export default MenuBurger;
