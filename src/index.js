import React from "react";
import "./simplecard.css";

class SimpleCard extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-image">
          <img src={this.props.cimg} alt="" />
        </div>
        <div className="card-profile">
          <h1>{this.props.cname}</h1>
        </div>
        <div className="card-desc">
          <p>{this.props.cdesc}</p>
        </div>
      </div>
    );
  }
}

export default SimpleCard;
