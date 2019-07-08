import React from "react";
import "./simplecard.css";

class SimpleCard extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "card-container" },
      React.createElement(
        "div",
        { className: "card-image" },
        React.createElement("img", { src: this.props.cimg, alt: "" })
      ),
      React.createElement(
        "div",
        { className: "card-profile" },
        React.createElement(
          "h1",
          null,
          this.props.cname
        )
      ),
      React.createElement(
        "div",
        { className: "card-desc" },
        React.createElement(
          "p",
          null,
          this.props.cdesc
        )
      )
    );
  }
}

export default SimpleCard;