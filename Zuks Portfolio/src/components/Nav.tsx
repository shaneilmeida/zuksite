import React from "react";

const Nav = () => {
  return (
    <ul
      style={{
        position: "absolute",
        top: "690px",
        backgroundColor: "rgb(232,251,72)",
      }}
      className={"nav nav-underline"}
    >
      <li className={"nav-item"}>
        <a className={"nav-link active"} aria-current="page" href="#">
          Active
        </a>
      </li>
      <li className={"nav-item"}>
        <a className={"nav-link"} href="#">
          Link
        </a>
      </li>
      <li className={"nav-item"}>
        <a className={"nav-link"} href="#">
          Link
        </a>
      </li>
      <li className={"nav-item"}>
        <a className={"nav-link disabled"}>Disabled</a>
      </li>
    </ul>
  );
};

export default Nav;
