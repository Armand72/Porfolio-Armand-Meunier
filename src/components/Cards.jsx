import React, { Component } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Image = styled.div`
  background: url(${(props) => props.url}) no-repeat;

  margin: auto;
  background-size: cover;
  height: 500px;
  border-radius: 50px;
  background-position: 50% 50%;
`;

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }

  isHovered = () => {
    this.setState({ hovered: !this.state.hovered });
  };
  render() {
    return (
      <>
        <div
          id="card"
          className="slide-carousel__card"
          onMouseEnter={this.isHovered}
          onMouseLeave={this.isHovered}
        >
          <Image url={this.props.url}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={this.state.hovered ? { opacity: 1 } : { opacity: 0 }}
              //   whileHover={{ backgroundColor: "#2d7562" }}
              className="slide-carousel__card--info"
            >
              <h2>En voyage vers soi</h2>
              <div>
                <motion.button whileHover={{ backgroundColor: "#2d7562" }}>
                  Read more
                </motion.button>
              </div>
            </motion.div>
          </Image>
        </div>
      </>
    );
  }
}

export default Cards;
