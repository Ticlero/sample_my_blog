import React, { Fragment } from "react";
import { HeaderLogoComponent } from "../header/HeaderComponent.jsx";

const onClickMenu = (e) => {
  console.dir(e.target.innerText);
};

const LeftMenuComponent = ({ clickHandler }) => {
  return (
    <Fragment>
      <HeaderLogoComponent></HeaderLogoComponent>
      <div className="leftmenu">
        <ul onClick={clickHandler}>
          <li>공지사항</li>
          <li>일상</li>
          <li>Momentum</li>
          <li>javascript</li>
          <li>react</li>
        </ul>
      </div>
    </Fragment>
  );
};

export { LeftMenuComponent };
