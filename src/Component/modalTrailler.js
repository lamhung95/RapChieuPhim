import React, { Component } from "react";

class ModalTrailler extends Component {
  render() {
    return (
      <div className="container">
        <button
          type="button"
          className="btn btn-primary video-btn"
          data-toggle="modal"
          data-src="https://www.youtube.com/embed/Jfrjeg26Cwk"
          data-target="#myModal"
        >
          Play Video 1
        </button>
        <div
          className="modal fade"
          id="myModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                {/* 16:9 aspect ratio */}
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    title="xx"
                    className="embed-responsive-item"
                    src
                    id="video"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  >
                    &gt;
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ModalTrailler;
