import React, { Component } from "react";
import Cube from "../components/menu/cube/Cube";
import { motion } from "framer-motion";
import Fullname from "../components/Fullname";

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

  downloadFile = () => {
    var link = document.createElement("a");
    link.href = "./CV.pdf";
    link.download = "ArmandMeunier";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    const pathVariantsMenu = {
      menu: { width: "100%" },
    };

    const { menuVisible } = this.props;

    return (
      <>
        <div className="container-fullname">
          <Fullname />
        </div>
        <div className="container-fullname__mobile">
          <h1>Armand</h1>
          <h1>Meunier</h1>
        </div>

        {!menuVisible && (
          <>
            <div className="blobBlueThree">
              <svg
                width="550"
                height="500"
                viewBox="0 0 573 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M181.161 98.0087C231.719 85.2374 280.004 103.192 328.89 123.501C393.446 150.32 475.933 162.596 498.685 229.918C523.742 304.062 488.276 385.538 436.279 441.263C385.908 495.247 310.132 527.417 238.181 509.104C174.977 493.017 157.493 415.966 120.28 360.834C83.9028 306.94 14.4995 261.995 29.0344 199.247C43.7886 135.552 119.069 113.694 181.161 98.0087Z"
                  fill="#A7D4FF"
                  opacity="0.2"
                />
              </svg>
            </div>

            <div className="container-picture">
              <img src="./silhou.png" alt="" />
            </div>
            <div className="side-persentation">
              <div className="presentation">
                <div className="title-homepage">
                  <h1 className="presentation__title">
                    Développeur web fullstack
                  </h1>
                  <span></span>
                </div>
                <p className="presentation__paragraph">
                  Je suis junior et prêt à vous suivre dans vos projets!
                </p>
                <p className="presentation__paragraph">
                  Je travaille avec <span>React</span> / <span>Vue</span> /
                  <span> Node </span> / <span>MySql</span>.
                </p>
                <div className="container-calltoaction">
                  <motion.div
                    whileHover="menu"
                    onClick={() => this.props.scrollTo(1)}
                    className="link-work"
                  >
                    Portfolio
                    <motion.span
                      variants={pathVariantsMenu}
                      className="spanMenu"
                    ></motion.span>
                  </motion.div>

                  <motion.div
                    whileHover="menu"
                    onClick={this.downloadFile}
                    className="link-work"
                  >
                    CV
                    <motion.span
                      variants={pathVariantsMenu}
                      className="spanCv"
                    ></motion.span>
                  </motion.div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="scroll-wrapper">
          <div className="mouse"></div>
        </div>

        {/* icon delete */}
        {menuVisible && (
          <motion.div
            className="closeIcon"
            onClick={this.props.switchMenu}
            whileHover={{ backgroundColor: "#388CCA" }}
          >
            X
          </motion.div>
        )}

        {/* liste menu */}
        {menuVisible && (
          <div className="containerMenu">
            <nav className="containerMenu__navbar">
              <ul>
                <motion.li
                  onMouseEnter={() => this.iconChange("hammer")}
                  whileHover="menu"
                  onClick={() => this.props.scrollTo(1)}
                >
                  Portfolio
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
                  À propos
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
                  Contact
                  <motion.span
                    variants={pathVariantsMenu}
                    className="spanMenu"
                  ></motion.span>
                </motion.li>
              </ul>
              <div className="containerMenu__logo">
                <Cube classIcon={this.state.classIcon} />
              </div>
            </nav>
          </div>
        )}
      </>
    );
  }
}

export default Homepage;
