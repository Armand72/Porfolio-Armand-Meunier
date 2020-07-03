import React, { Component } from "react";
import Cube from "./cube/Cube";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classIcon: "scroll",
    };
  }

  iconChange = (classIcon) => {
    this.setState({ classIcon });
    console.log(classIcon);
  };

  render() {
    return (
      <>
        <div className="homepage">
          <div className="containerMenu">
            <nav className="containerMenu__navbar">
              <ul>
                <li onMouseEnter={() => this.iconChange("hammer")}>My works</li>
                <li onMouseEnter={() => this.iconChange("skill")}>My skills</li>
                <li onMouseEnter={() => this.iconChange("avatar")}>About</li>
                <li onMouseEnter={() => this.iconChange("email")}>Contact</li>
              </ul>
            </nav>
            <div className="containerMenu__logo">
              <Cube classIcon={this.state.classIcon} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
