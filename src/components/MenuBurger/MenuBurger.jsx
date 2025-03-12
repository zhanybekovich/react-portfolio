import "./menu-burger.scss";

import MenuBurgerImg from "../../assets/menu-burger.svg";

function MenuBurger({ onClick }) {
  return (
    <button onClick={onClick} type="button" className="menu-burger">
      <img src={MenuBurgerImg} alt="Toggle menu" />
    </button>
  );
}
export default MenuBurger;
