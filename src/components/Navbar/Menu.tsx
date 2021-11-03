import "./Menu.scss";
import { NavLink } from "react-router-dom";

interface Props {
  hamburgerMenu: boolean;
  setFalse: () => void;
}

const Menu: React.FC<Props> = ({ hamburgerMenu, setFalse }) => {
  return (
    <div className={"menu " + (hamburgerMenu && "active")}>
      <ul>
        <li onClick={() => setFalse()}>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
