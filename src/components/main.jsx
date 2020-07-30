import React, { Component, Fragment } from "react";
import { LeftMenuComponent } from "./left-menu/LeftMenuComponent.jsx";
import { ContentsComponent } from "./contents/ContentsComponent.jsx";
import { loadCoords } from "./contents/momentum/getCurrentWeather.jsx";
import { getCurrentTime } from "./contents/momentum/getBackground.jsx";

var interval = null;
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c_menu: "공지사항",
      momentum: {
        weather: {
          temp: "",
          place: "",
        },
        time: {
          interval,
          ymd: "",
          hms: "",
        },
      },
    };
  }

  _intervalFunc = (menu, weather) => {
    let { temp, place } = weather;
    let { ymd, hms } = getCurrentTime();
    this.setState((preState, props) => {
      return {
        c_menu: menu,
        momentum: {
          weather: {
            temp,
            place,
          },
          time: {
            interval,
            ymd,
            hms,
          },
        },
      };
    });
  };

  _currentMenuChange = (e) => {
    e.persist();
    if (e.target.tagName !== "UL") {
      if (e.target.innerText.toLowerCase() === "momentum") {
        loadCoords();
        const wobj = JSON.parse(localStorage.getItem("weather"));
        console.log("weather", wobj);
        if (this.state.momentum.time.interval === null || this.state.momentum.time.interval === undefined) {
          interval = setInterval(this._intervalFunc, 1000, e.target.innerText, wobj);
        }
      } else {
        clearInterval(interval);
        interval = null;
        this.setState((preState, props) => {
          return {
            c_menu: e.target.innerText,
            momentum: {
              time: {
                interval,
              },
            },
          };
        });
      }
    } else {
      console.error(`Click miss error. you have to click a 'LI' element. Not ${e.target.tagName}`);
    }
  };

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <div className="aside">
          <LeftMenuComponent clickHandler={this._currentMenuChange}></LeftMenuComponent>
        </div>
        <div className="contents">
          <ContentsComponent props={this.state}></ContentsComponent>
        </div>
      </Fragment>
    );
  }
}
