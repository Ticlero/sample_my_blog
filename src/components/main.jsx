import React, { Component, Fragment } from "react";
import { LeftMenuComponent } from "./left-menu/LeftMenuComponent.jsx";
import { ContentsComponent } from "./contents/ContentsComponent.jsx";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c_menu: "일상",
    };
  }

  _currentMenuChange = (e) => {
    e.persist();
    if (e.target.tagName !== "UL") {
      this.setState((preState, props) => {
        return {
          c_menu: e.target.innerText,
        };
      });
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
