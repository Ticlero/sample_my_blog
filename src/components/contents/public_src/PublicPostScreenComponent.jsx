import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote";
import "react-summernote/lang/summernote-ko-KR";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/tooltip";

export class PublicPostScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      cName: props.cName,
      modalShow: false,
    };
  }

  _handleClose = () => this.setState({ modalShow: false });
  _handleShow = () => this.setState({ modalShow: true });
  _onChage = (content) => {
    console.log("onChange", content);
  };

  writeModal = () => {
    return (
      <>
        <Modal show={this.state.modalShow} onHide={this._handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title + " > 글쓰기"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              <ReactSummernote
                value="Default value"
                options={{
                  lang: "ko-KR",
                  height: 350,
                  dialogsInBody: true,
                  toolbar: [
                    ["style", ["style"]],
                    ["font", ["bold", "underline", "clear"]],
                    ["fontname", ["fontname"]],
                    ["para", ["ul", "ol", "paragraph"]],
                    ["table", ["table"]],
                    ["insert", ["link", "picture", "video"]],
                    ["view", ["fullscreen", "codeview"]],
                  ],
                }}
                onChange={this.onChange}
              />
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this._handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this._handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

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
            </ul>
          </div>
          <div className="post-bnt-box">
            <span className="page-btn post-left-page-btn">
              <i className="fas fa-chevron-left"></i>
            </span>
            <div className="post-page-list-container">
              <ul className="page-lists">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </div>
            <span className="page-btn post-right-page-btn">
              <i className="fas fa-chevron-right"></i>
            </span>
            <div className="post-write-btn">
              <input type="button" value="글쓰기" onClick={this._handleShow} />
              <this.writeModal></this.writeModal>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
