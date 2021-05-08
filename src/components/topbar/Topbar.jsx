import React from "react";
import "./topbar.scss";
import { AccountBalance, ChangeHistory } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            ba.
          </a>
          <div className="itemContainer">
            <AccountBalance className="icon" />
            <span></span>
          </div>
          <div className="itemContainer">
            <ChangeHistory className="icon" />
            <a href="mailto:Secretariat@bibalex.org"></a>
            <span></span>
          </div>
        </div>
        {/* <h1>Biblioteka Aleksandryjska</h1> */}
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
