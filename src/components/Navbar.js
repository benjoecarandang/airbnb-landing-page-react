import React from "react"
import Logo from "../images/logo.png"

export default function Navbar() {
  return (
    <div className="nav">
      <img className="nav--logo" src={Logo} alt="Logo" />
    </div>
  );
}