import React, { Component } from "react";
import Popup from "../shared/popup";
class DownloadBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      books: [
        { text: "Crack Your Angular Interview", type: "Free" },
        {
          text: "DOCKERIZING ASP.NET CORE AND BLAZOR APPLICATIONS ON MAC",
          type: "Free"
        },
        { text: "DIVING INTO MICROSOFT .NET ENTITY FRAMEWORK", type: "Free" },
        { text: "ANGULAR 4.0 - A COMPLETE STUDY GUIDE", type: "Free" },
        {
          text: "THE DEVELOPER’S GUIDE TO MICROSOFT AZURE - SECOND EDITION",
          type: "Free"
        }
      ],
      index: -1
    };
  }

  togglePopup(index) {
    debugger;
    this.setState({
      showPopup: !this.state.showPopup,
      index: index
    });
  }

  render() {
    return (
      <div className="container">
        <div className="card-deck">
          <div className="row">
            {this.state.books.map((book, index) => {
              return (
                <div className="col-sm-3 mt-2">
                  <div
                    className="card text-white bg-warning"
                    style={{ height: "310px", cursor: "pointer" }}
                    onClick={() => this.togglePopup(index)}
                  >
                    <img src="" className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title" />
                      <p className="card-text">{book.text}</p>
                      <p className="card-text">
                        <small className="text-muted">{book.type}</small>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {this.state.showPopup ? (
          <Popup
            text={this.state.books[this.state.index].text}
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
    );
  }
}

export default DownloadBook;
