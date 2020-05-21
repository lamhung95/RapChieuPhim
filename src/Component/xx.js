import React, { Component } from "react";

export default class News extends Component {
  render() {
    const xx = this.props
    console.log(xx)
    return (

        <div className="container">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#myModall"
          >
            Open modal
          </button>
          <div className="modal" id="myModall">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                </div>
                <div className="modal-body">Modal body..</div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
