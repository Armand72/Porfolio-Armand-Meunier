import React, { Component } from "react";
import PartTitle from "../components/PartTitle";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <PartTitle title="About" />
        <div className="container-about">
          <div className="container-about__image">
            <img src="./portrait.jpg" alt="" />
          </div>

          <div className="container-about__side">
            <div>text</div>
            <div>skills</div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
