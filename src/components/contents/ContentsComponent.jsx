import React, { Fragment } from "react";
import { ContentsHeaderComponent } from "../header/HeaderComponent.jsx";
import { MomentumComponent } from "./momentum/MomentumComponent.jsx";
import { PublicPostScreenComponent } from "./public_src/PublicPostScreenComponent.jsx";

const MainViewControl = (menuName) => ({ props }) => {
  console.log(props);
  let title = menuName,
    cName = "";
  switch (menuName) {
    case "공지사항":
      cName = "public-info";
      break;
    case "일상":
      cName = "daily-life";
      break;
    case "Momentum":
      return (
        <Fragment>
          <MomentumComponent props={props}></MomentumComponent>
        </Fragment>
      );
    case "javascript":
      cName = "javascrip-post";
      break;
    case "react":
      cName = "react-post";
      break;
  }

  return <PublicPostScreenComponent title={title} cName={cName}></PublicPostScreenComponent>; //<div>test</div>;
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
