import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const BlobBlue = (props) => {
  const hoverVariants = {
    hover: { opacity: 1 },
    initial: props.class === "MenuBubble" ? { y: -200 } : { y: 200 },
    animate: props.class === "MenuBubble" ? { y: 0 } : { y: 0 },
    exit: props.class === "MenuBubble" ? { y: -200 } : { y: 200 },
  };

  const scrolling = () => {
    props.scrollTo(0, props.class);
  };
  return (
    <>
      <AnimatePresence>
        {props.isVisible && (
          <motion.div
            key={props.url}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`blobBlue ${props.class}`}
            whileHover="hover"
            variants={hoverVariants}
            onClick={scrolling}
          >
            <svg
              width={props.width}
              height={props.height}
              viewBox="0 0 165 169"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                key={props.url}
                className="blobCursor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M89.3758 0.226129C113.778 1.8551 134.177 16.438 148.673 35.1984C162.384 52.9419 167.747 74.6846 163.666 96.3677C159.3 119.569 147.587 141.24 126.418 153.461C102.449 167.3 72.679 174.738 47.2006 163.609C21.2883 152.289 7.69787 125.804 2.15206 99.1783C-3.17423 73.6061 1.04458 46.4875 18.6468 26.5184C35.7651 7.09831 62.813 -1.54709 89.3758 0.226129Z"
                fill="#388CCA"
                opacity="0.5"
                variants={hoverVariants}
              />
            </svg>

            <h3 whileHover="hover" className="buble-title">
              {props.title}
            </h3>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BlobBlue;

// const ScrollPosition = () => {
//   // const [scrollPosition, setSrollPosition] = useState(0);
//   // const handleScroll = () => {
//   //   const position = window.pageYOffset;
//   //   console.log(position);
//   //   setSrollPosition(position);
//   // };

//   // useEffect(() => {
//   //   window.addEventListener("scroll", handleScroll, { passive: true });

//   //   return () => {
//   //     window.removeEventListener("scroll", handleScroll);
//   //   };
//   // }, []);

//   // const [hideOnScroll, setHideOnScroll] = useState(0);

//   // useScrollPosition(
//   //   ({ prevPos, currPos }) => {
//   //     console.log(prevPos, currPos);

//   //     if (currPos.y > prevPos.y);
//   //     setHideOnScroll(currPos);
//   //   },
//   //   [hideOnScroll]
//   // );

//   // console.log(hideOnScroll);

//   const [scrolled, setScrolled] = useState(0);
//   useEffect((_) => {
//     const handleScroll = (_) => {
//       setScrolled(window.pageYOffset);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return (_) => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   console.log();
//   return (
//     <>
//       <span>{scrolled}</span>
//       {false ? (
//         <div className={`blobBlue ${this.props.class}`}>
//           <svg
//             width={this.props.width}
//             height={this.props.height}
//             viewBox="0 0 165 169"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <motion.path
//               className="blobCursor"
//               fill-rule="evenodd"
//               clip-rule="evenodd"
//               d="M89.3758 0.226129C113.778 1.8551 134.177 16.438 148.673 35.1984C162.384 52.9419 167.747 74.6846 163.666 96.3677C159.3 119.569 147.587 141.24 126.418 153.461C102.449 167.3 72.679 174.738 47.2006 163.609C21.2883 152.289 7.69787 125.804 2.15206 99.1783C-3.17423 73.6061 1.04458 46.4875 18.6468 26.5184C35.7651 7.09831 62.813 -1.54709 89.3758 0.226129Z"
//               fill="#A7D4FF"
//               opacity="0.2"
//               whileHover={{
//                 opacity: "1",
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 50,
//               }}
//             />
//           </svg>

//           <h3>{this.props.title}</h3>
//         </div>
//       ) : (
//         ""
//       )}
//     </>
//   );
// };

// export default ScrollPosition;
