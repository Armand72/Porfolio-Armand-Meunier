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
        {/* <div className="container-fullname">
          <Fullname />
        </div> */}
        <div className="container-fullname__mobile">
          <h1>Armand</h1>
          <h1>Meunier</h1>
        </div>

        {!menuVisible && (
          <>
            <div className="container-picture">
              <img src="./silhou.webp" alt="" />
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
