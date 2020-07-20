import React from "react";

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MobileMenu = (props) => (
  <div className="mobile-menu">
    <div
      onClick={() => props.scrollToMobile("Homepage")}
      className={props.activated === "home" && "menu-highlight"}
    >
      <div>
        <img src="./home.webp" alt="" />
      </div>
    </div>
    <div
      onClick={() => props.scrollToMobile("Portfolio")}
      className={props.activated === "portfolio" && "menu-highlight"}
    >
      <div>
        <img src="./portfolio.webp" alt="" />
      </div>
    </div>
    <div
      onClick={() => props.scrollToMobile("About")}
      className={props.activated === "about" && "menu-highlight"}
    >
      <div>
        <img src="./about.webp" alt="" />
      </div>
    </div>
    <div
      onClick={() => props.scrollToMobile("Contact")}
      className={props.activated === "message" && "menu-highlight"}
    >
      <div>
        <img src="./message.webp" alt="" />
      </div>
    </div>
  </div>
);

const MyComponent = (props) => {
  const { width } = useViewport();
  const breakpoint = 768;

  return (
    width < breakpoint && (
      <MobileMenu
        scrollToMobile={props.activated.scrollToMobile}
        activated={props.activated.activated}
      />
    )
  );
};

export default function Breakpoint(activated) {
  return (
    <ViewportProvider>
      <MyComponent activated={activated} />
    </ViewportProvider>
  );
}
