import React, { Fragment } from "react";
import { ContentsHeaderComponent } from "../header/HeaderComponent.jsx";
import { MomentumComponent } from "./momentum/MomentumComponent.jsx";

const MainViewControl = (menuName) => ({ props }) => {
  console.log(menuName);
  switch (menuName) {
    case "공지사항":
      return (
        <Fragment>
          <div className={menuName}>{`${menuName} -> ${props}`}</div>
        </Fragment>
      );
      break;
    case "일상":
      return (
        <Fragment>
          <div className={menuName}>{`${menuName} -> ${props}`}</div>
        </Fragment>
      );
      break;
    case "Momentum":
      return (
        <Fragment>
          <MomentumComponent props={props}></MomentumComponent>
        </Fragment>
      );
      break;
    case "javascript":
      return (
        <Fragment>
          <div className={menuName}>{`${menuName} -> ${props}`}</div>
        </Fragment>
      );
      break;
    case "react":
      return (
        <Fragment>
          <div className={menuName}>{`${menuName} -> ${props}`}</div>
        </Fragment>
      );
      break;
  }
};

const ContentsComponent = ({ props }) => {
  var MainView = MainViewControl(props.c_menu);
  return (
    <Fragment>
      <div className="contents__header">
        <ContentsHeaderComponent></ContentsHeaderComponent>
      </div>
      <div className="contents__main">
        <MainView props={props}></MainView>
      </div>
    </Fragment>
  );
};

export { ContentsComponent };
