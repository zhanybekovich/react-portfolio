import "./menu-burger.scss";

import MenuBurgerImg from "../../assets/menu-burger.svg";

function MenuBurger() {
  return (
    <button type="button" className="menu-burger">
      <img src={MenuBurgerImg} alt="Toggle menu" />
    </button>
  );
}
export default MenuBurger;
