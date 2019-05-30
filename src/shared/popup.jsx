import React, { Component } from "react";
import "../style.css";
class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <button
            className="bg-danger float-right p-4"
            onClick={this.props.closePopup}
          >
            X
          </button>
          {/* <div className="container">
            <div class="row">
              <div className="col-sm-4">
                <div
                  className="card text-white bg-warning"
                  style={{ height: "310px", cursor: "pointer" }}
                >
                  <img src="" className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title" />
                    <p className="card-text">{this.props.text}</p>
                    <p className="card-text">
                      <small className="text-muted" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-8" />
            </div>
          </div> */}
          <div className="container">
            <div className="row">
              <aside className="col-sm-4">
                <div
                  className="card text-white bg-warning"
                  style={{ height: "310px", cursor: "pointer" }}
                >
                  <img src="" className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title" />
                    <p className="card-text">{this.props.text}</p>
                    <p className="card-text">
                      <small className="text-muted" />
                    </p>
                  </div>
                </div>
              </aside>
              <div className="col-sm-8">
                <section>
                  <h1>{this.props.text}</h1>
                  <p className="ebook-box">{this.props.text}</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
