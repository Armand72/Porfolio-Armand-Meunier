import React, { Component } from "react";
import CubeData from "./CubeData";
import { motion } from "framer-motion";

class Cube extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classIcon } = this.props;

    return (
      <>
        <div className={`container ${classIcon} `}>
          {CubeData.map((props, index) => (
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              key={props.id}
            >
          
            </motion.div>
          ))}
        </div>
      </>
    );
  }
}

export default Cube;
