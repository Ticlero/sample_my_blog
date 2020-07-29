import React, { Component, Fragment } from "react";
import { LeftMenuComponent } from "./left-menu/LeftMenuComponent.jsx";
import { ContentsComponent } from "./contents/ContentsComponent.jsx";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <div className="aside">
          <LeftMenuComponent></LeftMenuComponent>
        </div>
        <div className="contents">
          <ContentsComponent></ContentsComponent>
        </div>
      </Fragment>
    );
  }
}
