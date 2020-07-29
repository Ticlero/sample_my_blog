import React, { Fragment } from "react";
import { ContentsHeaderComponent } from "../header/HeaderComponent.jsx";
import { loadCoords } from "./momentum/getCurrentWeather.jsx";

const MainViewControl = ({ menuName }) => ({ something = "" }) => {
  loadCoords();
  const wobj = JSON.parse(localStorage.getItem("weather"));
  console.log(wobj);
  return (
    <Fragment>
      <div className={menuName}>{`${menuName.c_menu} -> ${something}`}</div>
      <div className="weather">{`${wobj.temp} \n ${wobj.place}`}</div>
    </Fragment>
  );
};

const ContentsComponent = ({ c_menu }) => {
  //console.log(c_menu);
  var MainView = MainViewControl({ menuName: c_menu });
  return (
    <Fragment>
      <div className="contents__header">
        <ContentsHeaderComponent></ContentsHeaderComponent>
      </div>
      <div className="contents__main">
        <MainView something={"test"}></MainView>
      </div>
    </Fragment>
  );
};

export { ContentsComponent };
