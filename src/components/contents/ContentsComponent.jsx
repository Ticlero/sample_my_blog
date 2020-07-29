import React, { Fragment } from "react";
import { ContentsHeaderComponent } from "../header/HeaderComponent.jsx";

const ContentsComponent = () => {
  return (
    <Fragment>
      <div className="contents__header">
        <ContentsHeaderComponent></ContentsHeaderComponent>
      </div>
    </Fragment>
  );
};

export { ContentsComponent };
