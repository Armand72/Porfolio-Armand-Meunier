import React, { Component } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Image = styled.div`
  background: url(${(props) => props.img}) no-repeat;

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
    const {
      img,
      title,
      text,
      summary,
      github,
      website,
      skills,
      category,
      large,
    } = this.props;

    return (
      <>
        <motion.div
          id="card"
          className="slide-carousel__card"
          onMouseEnter={this.isHovered}
          onMouseLeave={this.isHovered}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Image img={img}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={this.state.hovered ? { opacity: 1 } : { opacity: 0 }}
              className="slide-carousel__card--info"
            >
              <h2>{title}</h2>
              <p>{summary}</p>
              <p>Technologies: {skills}</p>
              <div>
                <motion.button
                  whileHover={{ backgroundColor: "#2d7562" }}
                  onClick={() =>
                    this.props.switchModal(
                      { title },
                      { img },
                      { text },
                      { github },
                      { website },
                      { category },
                      { skills },
                      { large }
                    )
                  }
                >
                  En savoir plus
                </motion.button>
              </div>
            </motion.div>
          </Image>
        </motion.div>
      </>
    );
  }
}

export default Cards;
