import React, { Component } from "react";
import CubeData from "./CubeData";
import { motion } from "framer-motion";

class Cube extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className={`container ${this.props.classIcon} `}>
          {CubeData.map((props, index) => (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ rotate: 15 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              key={props.id}
            ></motion.div>
          ))}
        </div>
      </>
    );
  }
}

export default Cube;
