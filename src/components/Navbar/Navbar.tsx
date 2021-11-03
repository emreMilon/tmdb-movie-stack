import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

interface Props {
  hamburgerMenu: boolean;
  setOpen: () => void;
  getTrendies: () => void;
}

const Navbar: React.FC<Props> = ({ hamburgerMenu, setOpen, getTrendies }) => {
  return (
    <div className={"navbar " + (hamburgerMenu && "active")}>
      <div className="wrapper">
        <div className="left">
          <NavLink to="/" className="logo" onClick={getTrendies}>
            Movie Stack
          </NavLink>
          <div className="itemContainer">
            <span>Entspannende Movies</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setOpen()}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
