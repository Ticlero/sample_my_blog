import React, { Fragment } from "react";
const HeaderLogoComponent = () => {
  return (
    <div className="header-logo">
      <a href="#">SHJ Blog</a>
    </div>
  );
};

const ContentsHeaderComponent = () => {
  return (
    <Fragment>
      <div className="icons">
        <i className="far fa-bell"></i>
        <i className="fas fa-tools"></i>
        <i className="fas fa-user-circle"></i>
      </div>
    </Fragment>
  );
};

export { ContentsHeaderComponent, HeaderLogoComponent };
