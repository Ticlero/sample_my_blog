import React, { Fragment } from "react";
import { getBackgroundImage } from "./getBackground.jsx";

var mainScreen = "";

const getScreenWidth = () => {
  return mainScreen.clientWidth;
};

const getScreenHeight = () => {
  return mainScreen.clientHeight;
};

const seasonCalculator = (ymd) => {
  let month = ymd.split("-")[1].toString();
  let season = "spring";

  if (month >= 6 && month <= 8) {
    season = "summer";
  } else if (month >= 9 && month <= 10) {
    season = "autumn";
  } else if (month == 1 || month == 2 || (month >= 11 && month <= 12)) {
    season = "winter";
  }

  return season;
};

const BackgroundComponent = ({ ymd }) => {
  mainScreen = document.querySelector(".contents__main");
  console.log(ymd);
  console.log(getScreenWidth(), getScreenHeight());
  const img = getBackgroundImage(getScreenWidth(), getScreenHeight(), seasonCalculator(ymd));
  return (
    <div className="main__bg">
      <img src={img.src} className={img.className}></img>
    </div>
  );
};

const MomentumComponent = ({ props }) => {
  let { ymd, hms } = props.momentum.time;
  let { temp, place } = props.momentum.weather;
  console.log(props, ymd, hms);
  return (
    <Fragment>
      <BackgroundComponent ymd={ymd}></BackgroundComponent>
      <div className="weather">
        <span>{`${place}`}</span>
        <span>{`${temp}℃`}</span>
      </div>
      <div className="main__time">
        <span>{ymd}</span>
        <span>{hms}</span>
      </div>
    </Fragment>
  );
};

export { MomentumComponent };
