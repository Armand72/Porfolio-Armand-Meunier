import React, { Component } from "react";
import { motion } from "framer-motion";

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <motion.div
        initial={{ top: "-10%" }}
        animate={{ top: "2%" }}
        transition={{ duration: 1 }}
        className="error-container"
      >
        {this.props.message} <p onClick={this.props.switchError}>X</p>
      </motion.div>
    );
  }
}

export default Error;
