import React, { Component } from "react";
import { motion } from "framer-motion";
import BackgroundBlob from "../components/background/BackgroundBlob";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const pathVariants = {
      hover: { width: "350px" },
    };

    return (
      <>
        <div>
          {/* menu */}

          <BackgroundBlob />
        </div>
      </>
    );
  }
}

export default Menu;
