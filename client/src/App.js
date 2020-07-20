import React, { Component, lazy, Suspense } from "react";
import Homepage from "./pages/Homepage";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
// import Skill from "./pages/Skill";
// import Experience from "./pages/Experience";
import styled from "styled-components";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BlobBlue from "./components/background/blobBlue";
import VisibilitySensor from "react-visibility-sensor";
import Breakpoint from "./components/Breakpoint";
import { motion } from "framer-motion";
import Error from "./pages/Error";
import parse from "html-react-parser";

import "./assets/_main.scss";

const Work = lazy(() => import("./pages/Work"));
const renderLoad = () => <p></p>;

const Image = styled.div`
  @media (max-width: 576px) {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  background: url(${(props) => props.large}) no-repeat;
  opacity: 0.3;
  margin: auto;
  background-size: cover;
  height: 200px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      menuVisible: false,
      bubbleMenu: true,
      modalVisible: false,
      project: {
        title: "",
        img: "",
        texte: "",
        github: "",
        website: "",
        skills: "",
        large: "",
      },
      activated: "home",
      seeError: false,
      errorMessage: "",
    };
  }

  errorMessage = (message) => {
    this.setState({ seeError: true });
    this.setState({ errorMessage: message });
  };

  switchMenu = () => {
    this.setState({ bubbleMenu: true });
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  switchMenuFast = () => {
    this.setState({ menuVisible: true });
  };

  ActivateMenu = (isVisible) => {
    if (isVisible === true) {
      this.setState({ isVisible: true });
      this.setState({ bubbleMenu: true });
      this.setState({ activated: "portfolio" });
    }
  };

  DeactivateMenu = (isVisible) => {
    console.log(isVisible);
    if (this.state.bubbleMenu === true && this.state.menuVisible === true) {
      this.setState({ bubbleMenu: false });
    }
    if (isVisible === true) {
      this.setState({ isVisible: false });
      this.setState({ activated: "home" });
    }
  };

  observeAbout = (isVisible) => {
    if (isVisible === true) {
      this.setState({ activated: "about" });
    }
  };

  observeContact = (isVisible) => {
    if (isVisible === true) {
      this.setState({ activated: "message" });
    }
  };

  scrollTo = (name, button) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInCubic",
    });

    if (button === "MenuBubble") {
      this.setState({ bubbleMenu: false });
      this.setState({ menuVisible: true });
    } else if (button === "goBackBubble") {
      scroll.scrollToTop();
    } else {
      this.setState({ menuVisible: false });
    }
  };

  switchModal = (
    title,
    img,
    text,
    github,
    website,
    category,
    skills,
    large
  ) => {
    this.setState((prevState) => ({
      ...prevState,
      project: { title, img, text, github, website, category, skills, large },
    }));
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  switchError = () => {
    this.setState({ seeError: false });
  };

  render() {
    const scrollToMobile = (name) => {
      if (name === "Homepage") {
        scroll.scrollToTop();
      } else {
        scroller.scrollTo(name, {
          duration: 800,
          delay: 0,
          smooth: "easeInCubic",
        });
      }
    };

    const {
      title,
      img,
      text,
      github,
      website,
      skills,
      large,
    } = this.state.project;

    const pathVariantsMenu = {
      menu: { width: "100%" },
    };

    return (
      <>
        <div>
          {/* Error message for contact */}
          {this.state.seeError && (
            <Error
              message={this.state.errorMessage}
              switchError={this.switchError}
            />
          )}

          {/* Modal for work */}

          {this.state.modalVisible === true && (
            <div className="background-modal">
              <div className="container-modal">
                <motion.div
                  whileHover={{ backgroundColor: "#388CCA" }}
                  onClick={this.closeModal}
                  className="container-modal__close"
                >
                  X
                </motion.div>
                <div className="container-modal__image">
                  <Image large={large.large}></Image>
                  <h2 className="container-modal__title">{title.title}</h2>
                </div>
                <p className="container-modal__text ">
                  {parse(`${text.text}`)}
                </p>

                <div className="container-modal__callcontainer">
                  {website.website !== "" && (
                    <motion.a
                      href={website.website}
                      target="_blank"
                      whileHover="menu"
                      className="container-modal__button"
                    >
                      <p>Site web</p>
                      <motion.span
                        variants={pathVariantsMenu}
                        className="container-modal__span"
                      ></motion.span>
                    </motion.a>
                  )}

                  {github.github !== "" && (
                    <motion.a
                      href={github.github}
                      target="_blank"
                      whileHover="menu"
                      className="container-modal__button"
                    >
                      <p>Github</p>
                      <motion.span
                        variants={pathVariantsMenu}
                        className="container-modal__span container-modal__span--blue"
                      ></motion.span>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Menu for mobile */}

          {/* mainpage */}
          {/* <div className="background-noblob"> */}
          <BlobBlue
            width="50"
            height="50"
            title="^"
            class="goBackBubble"
            isVisible={this.state.isVisible}
            scrollTo={this.scrollTo}
          />

          <BlobBlue
            width="100"
            height="100"
            title="Menu"
            class="MenuBubble"
            isVisible={this.state.bubbleMenu}
            scrollTo={this.scrollTo}
          />

          <div className="hoc">
            <div className="main-page">
              <VisibilitySensor
                minTopValue={550}
                partialVisibility={true}
                onChange={this.DeactivateMenu}
              >
                <Homepage
                  scrollTo={this.scrollTo}
                  switchMenu={this.switchMenu}
                  menuVisible={this.state.menuVisible}
                />
              </VisibilitySensor>
            </div>
            <div className="main-page">
              <Suspense fallback={renderLoad()}>
                <div className="background-black"></div>

                <VisibilitySensor
                  minTopValue={550}
                  partialVisibility={true}
                  onChange={this.ActivateMenu}
                >
                  <Work switchModal={this.switchModal} />
                </VisibilitySensor>
              </Suspense>
            </div>
            <div className="main-page">
              <Suspense fallback={renderLoad()}>
                <VisibilitySensor
                  minTopValue={550}
                  partialVisibility={true}
                  onChange={this.observeAbout}
                >
                  <About />
                </VisibilitySensor>
              </Suspense>
            </div>{" "}
            <div className="main-page">
              <Suspense fallback={renderLoad()}>
                <div className="background-black"></div>
                <VisibilitySensor
                  minTopValue={550}
                  partialVisibility={true}
                  onChange={this.observeContact}
                >
                  <Contact errorMessage={this.errorMessage} />
                </VisibilitySensor>
              </Suspense>
            </div>
          </div>
          <Breakpoint
            activated={this.state.activated}
            scrollToMobile={scrollToMobile}
          ></Breakpoint>
        </div>
      </>
    );
  }
}

export default App;
