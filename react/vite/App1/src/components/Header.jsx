import React from "react";
import Foto from "../assets/img/eu2.jpeg";

function Header() {
  return (
    <header>
      <img src={Foto} alt="Minha foto" />
      <h1>AndreyODev</h1>
    </header>
  );
}

export default Header;
