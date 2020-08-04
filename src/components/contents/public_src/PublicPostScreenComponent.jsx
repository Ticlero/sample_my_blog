import React, { Component } from "react";

export class PublicPostScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      cName: props.cName,
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="main-post-screen">
        <div className="post-header">
          <div className="post-title">
            <span>{this.state.title}</span>
          </div>
          <div className="post-search">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <section className={this.state.cName + " post"}>
          <div className="post-list-container">
            <ul className="post-lists">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
