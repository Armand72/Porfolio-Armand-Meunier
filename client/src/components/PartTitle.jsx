import React, { Component } from "react";

class PartTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="title-part">
          <h1>{this.props.title}</h1>
          <span></span>
        </div>
      </>
    );
  }
}

export default PartTitle;
