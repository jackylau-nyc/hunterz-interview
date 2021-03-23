import React from "react";
import HeaderLink from "../components/HeaderLink";
import "./styles/HeaderContainer.css";

export default function HeaderContainer() {
  return (
    <div className="header-container">
      <HeaderLink title="Preview" to="/" />
      <HeaderLink title="Checker" to="/appcheck" />
    </div>
  );
}
