import React, { Component } from "react";
import BlobGreen from "../components/background/BlobGreen";
import Cube from "../components/menu/cube/Cube";
import { motion } from "framer-motion";
import Firstname from "../components/Firstname";
import Lastname from "../components/Lastname";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classIcon: "menu",
    };
  }

  iconChange = (classIcon) => {
    this.setState({ classIcon });
  };

  render() {
    const pathVariantsButton = {
      hover: { width: "300px" },
    };
    const pathVariantsMenu = {
      menu: { width: "100%" },
    };
    const pathVariants = {
      hover: { scale: 0.8, transition: { stiffness: 50 } },
    };

    const { menuVisible } = this.props;

    return (
      <>
        <div className="scroll-wrapper">
          <div className="mouse"></div>
        </div>
        {menuVisible && (
          <motion.div
            className="closeIcon"
            onClick={this.props.switchMenu}
            whileHover={{ backgroundColor: "#A7D4FF" }}
          >
            X
          </motion.div>
        )}
        {!menuVisible ? (
          <div className="presentation-container">
            <div className="title__container">
              <h1>
                Je suis développeur junior fullstack et bienvenue sur mon
                portfolio! J'utilise principalement React, Vue ainsi que Mysql
                et MongoDb. Ayant fini ma formation, je recherche actuellement
                un emploi.
              </h1>
            </div>

            <motion.div
              className="button-container"
              whileHover="hover"
              onClick={() => this.props.scrollTo(1)}
            >
              <h2>See my work</h2>
              <motion.span variants={pathVariantsButton}></motion.span>
            </motion.div>
          </div>
        ) : (
          <div className="containerMenu">
            <nav className="containerMenu__navbar">
              <ul>
                <motion.li
                  onMouseEnter={() => this.iconChange("hammer")}
                  whileHover="menu"
                  onClick={() => this.props.scrollTo(1)}
                >
                  My works
                  <motion.span
                    variants={pathVariantsMenu}
                    className="spanMenu"
                  ></motion.span>
                </motion.li>
                {/* <motion.li
                  onMouseEnter={() => this.iconChange("skill")}
                  whileHover="skills"
                  onClick={() => this.props.scrollTo(2)}
                >
                  My skills
                  <motion.span
                    variants={pathVariantsMenu}
                    className="spanMenu"
                  ></motion.span>
                </motion.li>
                <motion.li
                  onMouseEnter={() => this.iconChange("experience")}
                  whileHover="experience"
                  onClick={() => this.props.scrollTo(3)}
                >
                  Experience
                  <motion.span
                    variants={pathVariantsMenu}
                    className="spanMenu"
                  ></motion.span>
                </motion.li> */}
                <motion.li
                  onMouseEnter={() => this.iconChange("about")}
                  whileHover="menu"
                  onClick={() => this.props.scrollTo(2)}
                >
                  About
                  <motion.span
                    variants={pathVariantsMenu}
                    className="spanMenu"
                  ></motion.span>
                </motion.li>
                <motion.li
                  onMouseEnter={() => this.iconChange("email")}
                  whileHover="menu"
                  onClick={() => this.props.scrollTo(3)}
                >
                  Contact{" "}
                  <motion.span
                    variants={pathVariantsMenu}
                    className="spanMenu"
                  ></motion.span>
                </motion.li>
              </ul>
            </nav>
          </div>
        )}

        <div className="backgroundFullScreen">
          <div className="containerBlobOne">
            <BlobGreen />
          </div>
          <div className="containerBlobTwo">
            <BlobGreen />
          </div>
          <div className="containerBlobThree">
            <BlobGreen />
          </div>
          {/* <div className="blobBlueOne"> */}
          {/* <svg
              width="817"
              height="800"
              viewBox="0 0 817 939"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M296.11 160.182C378.74 139.287 457.627 168.538 537.49 201.63C642.955 245.33 777.737 265.28 814.846 375.124C855.715 496.098 797.674 629.102 712.646 720.099C630.276 808.252 506.415 860.83 388.857 831.019C285.591 804.832 257.1 679.105 196.348 589.171C136.959 501.255 23.5922 427.978 47.4098 325.559C71.5865 221.596 194.627 185.844 296.11 160.182Z"
                fill="#A7D4FF"
                fill-opacity="0.2"
              />
            </svg> */}
          {!menuVisible ? (
            <motion.div
              className="blobBlueTwo"
              // whileHover="hover"
              // onClick={this.props.switchMenu}
            >
              {/* <Firstname /> */}
              {/* <Lastname /> */}

              {/* <h1 className="blobBlueTwo__text">Menu</h1>
                <svg
                  width="436"
                  height="406"
                  viewBox="0 0 436 406"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M236.169 0.543246C300.649 4.45664 354.551 39.4902 392.857 84.5595C429.087 127.186 443.258 179.42 432.476 231.511C420.939 287.249 389.987 339.309 334.051 368.67C270.713 401.915 192.049 419.785 124.724 393.048C56.2528 365.855 20.341 302.228 5.68665 238.263C-8.38767 176.829 2.76022 111.68 49.2728 63.7069C94.5066 17.0527 165.979 -3.71669 236.169 0.543246Z"
                    fill="#A7D4FF"
                    variants={pathVariants}
                  /> */}
              {/* </svg> */}
            </motion.div>
          ) : (
            <div className="containerMenu__logo">
              <Cube classIcon={this.state.classIcon} />
            </div>
          )}
          {/* </div> */}
          <div className="blobBlueThree">
            <svg
              width="367"
              height="450"
              viewBox="0 0 367 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M189.403 0.831349C250.81 -5.02791 316.709 20.1076 351.08 75.5015C383.311 127.446 358.631 192.699 346.401 253.857C333.884 316.451 331.737 388.35 281.689 422.505C226.651 460.064 153.682 457.562 96.1774 424.616C40.9511 392.976 8.48401 328.777 0.906235 261.639C-5.80261 202.199 25.8225 150.447 59.9092 103.284C94.5695 55.3274 133.369 6.17784 189.403 0.831349Z"
                fill="#A7D4FF"
                opacity="0.2"
                whileHover={{
                  opacity: "1",
                  scale: 0.8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                }}
              />
            </svg>
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
