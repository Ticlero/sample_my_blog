import React, { Fragment } from "react";
import { HeaderLogoComponent } from "../header/HeaderComponent.jsx";

const LeftMenuComponent = () => {
  return (
    <Fragment>
      <HeaderLogoComponent></HeaderLogoComponent>
      <div className="leftmenu">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </Fragment>
  );
};

export { LeftMenuComponent };
