import React from "react";
import "./styles/HeaderLink.css";

function HeaderLink({ title, to }) {
  return (
    <a href={to} className="header-link">
      {title}
    </a>
  );
}

export default HeaderLink;
