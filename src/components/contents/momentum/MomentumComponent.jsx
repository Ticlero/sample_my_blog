import React, { Fragment, Component, useCallback, createElement } from "react";
import { getBackgroundImage, getCurrentTime } from "./getBackground.jsx";
import { loadCoords } from "./getCurrentWeather.jsx";
import * as toDoListHandler from "./toDoListHandler";
var mainScreen = "";

const getScreenWidth = () => {
  return mainScreen.clientWidth;
};

const getScreenHeight = () => {
  return mainScreen.clientHeight;
};

const BackgroundComponent = () => {
  mainScreen = document.querySelector(".contents__main");
  const img = getBackgroundImage(getScreenWidth(), getScreenHeight());
  return (
    <div className="main__bg">
      <img src={img.src} className={img.className}></img>
    </div>
  );
};

class WeatherComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        place: "loading...",
        temperature: "loading...",
      },
    };
  }

  componentDidMount() {
    loadCoords();
    this.tickId = setInterval(this._intervalFunc, 1000);
  }

  _intervalFunc = () => {
    let place = "loading...",
      temperature = "loading...";
    let Isloaded = false;
    let weather = JSON.parse(localStorage.getItem("weather"));
    if (weather != null) {
      place = weather.place;
      temperature = weather.temperature;
      Isloaded = true;
      this.changeState(place, temperature);
    }
    if (Isloaded === true) {
      //Isloaded = false;
      clearInterval(this.tickId);
      toDoListHandler.loadTodoList();
    }
  };

  changeState = (place, temperature) => {
    this.setState((preState, props) => {
      return {
        weather: {
          place,
          temperature,
        },
      };
    });
  };

  render() {
    return (
      <div className="weather">
        <span>{`${this.state.weather.place}`}</span>
        <span>{`${this.state.weather.temperature}℃`}</span>
      </div>
    );
  }
}

class TimeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        ymd: "",
        hms: "",
      },
    };
  }

  _intervalFunc = () => {
    let { ymd, hms } = getCurrentTime();
    this.tick(ymd, hms);
  };

  tick = (ymd, hms) => {
    this.setState((preState, props) => {
      return {
        time: {
          ymd,
          hms,
        },
      };
    });
  };

  componentDidMount() {
    this.timerID = setInterval(this._intervalFunc, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="main__time">
        <span className="time-hms">{this.state.time.hms}</span>
        <span className="time-ymd">{this.state.time.ymd}</span>
      </div>
    );
  }
}

const TodoList = () => {
  return (
    <div className="main__todolist-container">
      <input className="todolist-container__textbox" onKeyUp={toDoListHandler._handleToDoListInputBox} type="text" placeholder="오늘의 할 일을 적어보세요." />
      <ul onClick={toDoListHandler._HandleClickTodoList} className="todolist-container__list"></ul>
    </div>
  );
};

const MomentumComponent = ({ props }) => {
  return (
    <Fragment>
      <BackgroundComponent></BackgroundComponent>
      <WeatherComponent props={props}></WeatherComponent>
      <TimeComponent props={props}></TimeComponent>
      <TodoList></TodoList>
    </Fragment>
  );
};

export { MomentumComponent };
