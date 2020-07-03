import React, { Component } from "react";
import { motion } from "framer-motion";

import PartTitle from "../components/PartTitle";
import Cards from "../components/Cards";

const imageData = [
  {
    url:
      "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  },
  {
    url:
      "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  },
  {
    url:
      "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  },
  {
    url:
      "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  },
  {
    url:
      "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  },
  {
    url:
      "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  },
  {
    url:
      "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  },
  {
    url:
      "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  },
  {
    url:
      "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  },
];

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = { leftConstraint: undefined };
  }

  componentDidMount() {
    const widthContainer = document.getElementById("slider").clientWidth;
    const widthCard = document.getElementById("card").clientWidth;
    const leftConstraint = -(widthContainer - widthCard * 1.5);

    this.setState({ leftConstraint });
  }

  render() {
    const { leftConstraint } = this.state;
    const list = { hover: { width: "80px", opacity: 1 } };

    return (
      <>
        <div className="container-work">
          <PartTitle title="My works" />
          <div className="container-work__main">
            <div className="selector-container">
              <motion.div
                whileHover={{
                  backgroundColor: "#4fcdab",
                }}
                className="selector-container__item"
              >
                <p>All</p>
                <motion.span variants={list}></motion.span>
              </motion.div>
              <motion.div
                whileHover={{
                  backgroundColor: "#4fcdab",
                }}
                className="selector-container__item"
              >
                <p>Développement</p>
              </motion.div>
              <motion.div
                whileHover={{
                  backgroundColor: "#4fcdab",
                }}
                className="selector-container__item"
              >
                <p>Projets personnels</p>
              </motion.div>
            </div>
            <motion.div
              drag="x"
              dragConstraints={{
                left: leftConstraint,
                right: 0,
              }}
            >
              <div id="slider" className="slide-carousel">
                {imageData.map((props, id) => (
                  <Cards url={props.url} key={id} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </>
    );
  }
}

export default Work;
