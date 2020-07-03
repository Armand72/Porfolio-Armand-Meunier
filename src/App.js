import React, { Component } from "react";
import Homepage from "./pages/Homepage";
import Work from "./pages/Work";
import Skill from "./pages/Skill";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BlobBlue from "./components/background/blobBlue";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import VisibilitySensor from "react-visibility-sensor";

import "./assets/_main.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false, menuVisible: false, bubbleMenu: true };
  }

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
    }
  };

  DeactivateMenu = (isVisible) => {
    if (isVisible === true) {
      this.setState({ isVisible: false });
    }
  };

  scrollTo = (pageNumber, button) => {
    this.parallax.scrollTo(pageNumber);

    if (button === "MenuBubble") {
      this.setState({ bubbleMenu: false });
      this.setState({ menuVisible: true });
      // setTimeout(this.switchMenuFast, 500);
    } else {
      this.setState({ menuVisible: false });
    }
  };

  render() {
    return (
      <>
        <div className="background-noblob">
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

          <Parallax
            pages={4}
            scrolling={true}
            ref={(ref) => (this.parallax = ref)}
          >
            <VisibilitySensor
              minTopValue={500}
              partialVisibility={true}
              onChange={this.DeactivateMenu}
            >
              <ParallaxLayer offset={0} speed={0.2}>
                <Homepage
                  scrollTo={this.scrollTo}
                  switchMenu={this.switchMenu}
                  menuVisible={this.state.menuVisible}
                />
              </ParallaxLayer>
            </VisibilitySensor>
            <ParallaxLayer offset={1} speed={0.2}>
              <VisibilitySensor
                minTopValue={800}
                partialVisibility={true}
                onChange={this.ActivateMenu}
              >
                <Work />
              </VisibilitySensor>
            </ParallaxLayer>
            {/* 
            <ParallaxLayer offset={2} speed={0.2}>
              <Skill />
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={0.2}>
              <Experience />
            </ParallaxLayer> */}
            <ParallaxLayer offset={2} speed={0.2}>
              <About />
            </ParallaxLayer>
            <ParallaxLayer offset={3} speed={0.2}>
              <Contact />
            </ParallaxLayer>
          </Parallax>
        </div>
      </>
    );
  }
}

export default App;
