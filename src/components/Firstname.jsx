import React, { Component } from "react";
import { motion } from "framer-motion";

class Firstname extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const icon = {
      hidden: { pathLength: 0, strokeWidth: "4", fill: "none" },
      // initialPath: { fill: "none" },
      // path: { fill: "#4FCDAB", transition: { delay: 4, duration: 5 } },
      visible: {
        pathLength: 1,
        strokeWidth: "4",
        // fill: "#4FCDAB",
        transition: { duration: 4 },
      },
    };
    return (
      <>
        <motion.svg
          width="327"
          height="78"
          viewBox="0 0 327 78"
          fill="#4FCDAB"
          xmlns="http://www.w3.org/2000/svg"
          variants={icon}
          initial="initialPath"
          animate="path"
        >
          <mask
            id="path-1-outside-1"
            maskUnits="userSpaceOnUse"
            x="-0.439941"
            y="-0.231934"
            width="327"
            height="78"
          >
            <rect
              fill="white"
              x="-0.439941"
              y="-0.231934"
              width="327"
              height="78"
            />
            <path
              // variants={icon}
              // animate="path"
              // initial="initialPath"

              d="M35.5841 74.2881L35.9681 70.5441C39.2321 70.2881 41.4721 69.9041 42.6881 69.3921C43.9041 68.8801 44.5121 68.0481 44.5121 66.8961C44.5121 65.6161 44.2241 64.0801 43.6481 62.2881L40.4801 51.8241C38.9441 51.7601 35.6161 51.7281 30.4961 51.7281C27.4241 51.7281 23.9361 51.9841 20.0321 52.4961L16.4801 62.4801C15.9041 64.2081 15.6161 65.4561 15.6161 66.2241C15.6161 67.6321 16.0641 68.6561 16.9601 69.2961C17.8561 69.8721 19.3281 70.1601 21.3761 70.1601H26.8481L27.0401 70.5441L26.4641 74.6721C25.6961 74.6081 23.9361 74.4801 21.1841 74.2881C18.4321 74.0961 15.7441 74.0001 13.1201 74.0001C10.7521 74.0001 8.54406 74.0321 6.49606 74.0961C4.51206 74.1601 3.20006 74.2241 2.56006 74.2881L3.32806 69.7761C5.12006 69.5841 6.56006 68.9761 7.64806 67.9521C8.73606 66.8641 9.79206 65.0081 10.8161 62.3841L29.5361 13.3281L35.5841 11.6961H36.3521C36.7361 13.2321 37.6961 16.7841 39.2321 22.3521C40.8321 27.9201 42.7521 34.5121 44.9921 42.1281C47.2961 49.7441 49.5041 56.7521 51.6161 63.1521C52.3841 65.5201 53.4081 67.1841 54.6881 68.1441C55.9681 69.1041 58.0161 69.7121 60.8321 69.9681L61.0241 70.3521L60.3521 74.2881C59.5841 74.2881 58.1761 74.2241 56.1281 74.0961C54.1441 74.0321 52.1601 74.0001 50.1761 74.0001C47.1041 74.0001 44.1281 74.1281 41.2481 74.3841C38.4321 74.6401 36.6401 74.8321 35.8721 74.9601L35.5841 74.2881ZM30.2081 47.7921C32.5121 47.7921 35.4881 47.6321 39.1361 47.3121L31.5521 22.1601H30.8801L21.7601 47.7921H30.2081Z"
            />
            <path d="M63.8516 70.5441C65.7716 70.3521 67.0516 69.7441 67.6916 68.7201C68.3316 67.6321 68.6516 65.5841 68.6516 62.5761V41.4561C68.6516 39.3441 68.3636 37.8401 67.7876 36.9441C67.2116 36.0481 66.2836 35.6001 65.0036 35.6001C64.4916 35.6001 64.0436 35.6321 63.6596 35.6961C63.3396 35.7601 63.1156 35.8241 62.9876 35.8881L62.5076 35.2161L62.7956 32.2401C65.2276 31.7921 67.7876 31.2481 70.4756 30.6081C73.2276 29.9681 74.9876 29.5521 75.7556 29.3601L76.4276 29.9361C76.2996 30.5121 76.1076 31.8561 75.8516 33.9681C75.5956 36.0161 75.4996 37.9681 75.5636 39.8241L75.9476 40.1121C77.8676 37.1041 80.1076 34.6401 82.6676 32.7201C85.2916 30.8001 87.5636 29.8401 89.4836 29.8401C90.3796 29.8401 91.0516 29.9041 91.4996 30.0321C92.0116 30.0961 92.3316 30.1601 92.4596 30.2241L92.7476 30.6081C92.6196 31.5041 92.3316 33.4241 91.8836 36.3681C91.4996 39.2481 91.2756 41.9041 91.2116 44.3361L87.4676 44.6241C87.4676 42.0001 87.2756 40.2721 86.8916 39.4401C86.5716 38.5441 85.8996 38.0961 84.8756 38.0961C83.4676 38.0961 81.9636 38.7041 80.3636 39.9201C78.7636 41.0721 77.2916 42.6401 75.9476 44.6241C75.8836 46.4801 75.7556 49.5521 75.5636 53.8401C75.3716 58.1281 75.2436 61.5841 75.1796 64.2081C75.1796 66.3841 75.4996 67.8561 76.1396 68.6241C76.7796 69.3921 77.9956 69.7761 79.7876 69.7761C80.6196 69.7761 81.4516 69.7441 82.2836 69.6801C83.1156 69.6161 83.6916 69.5841 84.0116 69.5841L84.1076 69.9681L83.2436 74.1921C82.6036 74.1921 81.3236 74.1601 79.4036 74.0961C77.4836 74.0321 75.4996 74.0001 73.4516 74.0001C71.0836 74.0001 68.9396 74.0321 67.0196 74.0961C65.0996 74.2241 63.8836 74.3201 63.3716 74.3841L63.8516 70.5441Z" />
            <path d="M126.138 71.2161C128.058 70.7041 129.434 69.9681 130.266 69.0081C131.098 67.9841 131.514 66.6401 131.514 64.9761L131.898 45.9681C131.898 42.7681 131.194 40.3041 129.786 38.5761C128.442 36.8481 126.49 35.9841 123.93 35.9841C121.882 35.9841 119.802 36.5281 117.69 37.6161C115.578 38.6401 113.722 39.7601 112.122 40.9761C111.546 54.2241 111.258 62.0961 111.258 64.5921C111.258 66.5761 111.514 67.9841 112.026 68.8161C112.538 69.5841 113.434 69.9681 114.714 69.9681C115.418 69.9681 116.09 69.9361 116.73 69.8721C117.37 69.8081 117.818 69.7761 118.074 69.7761L118.266 70.1601L117.402 74.2881C116.826 74.2241 115.706 74.1601 114.042 74.0961C112.378 74.0321 110.586 74.0001 108.666 74.0001C106.554 74.0001 104.602 74.0321 102.81 74.0961C101.018 74.1601 99.8016 74.1921 99.1616 74.1921L99.7376 70.2561C101.594 70.0641 102.874 69.5841 103.578 68.8161C104.346 68.0481 104.73 66.7681 104.73 64.9761V41.5521C104.73 39.3761 104.378 37.8721 103.674 37.0401C102.97 36.1441 101.754 35.6961 100.026 35.6961H98.9696L98.6816 35.3121L98.9696 32.1441C101.722 31.6961 104.442 31.1841 107.13 30.6081C109.882 29.9681 111.642 29.5521 112.41 29.3601L112.986 30.1281C112.858 30.5121 112.666 31.3441 112.41 32.6241C112.154 33.8401 111.994 35.1201 111.93 36.4641L112.122 36.7521C119.29 31.8881 123.994 29.4561 126.234 29.4561C129.306 29.4561 131.898 30.1281 134.01 31.4721C136.122 32.7521 137.626 34.6081 138.522 37.0401C140.826 35.3761 143.418 33.7121 146.298 32.0481C149.178 30.3201 151.418 29.4561 153.018 29.4561C157.05 29.4561 160.25 30.5761 162.618 32.8161C164.986 35.0561 166.17 38.0641 166.17 41.8401C166.17 42.4801 165.978 45.4241 165.594 50.6721C165.082 57.3281 164.826 61.9681 164.826 64.5921C164.826 66.5761 165.082 67.9841 165.594 68.8161C166.106 69.5841 167.002 69.9681 168.282 69.9681C168.986 69.9681 169.658 69.9361 170.298 69.8721C170.938 69.8081 171.386 69.7761 171.642 69.7761L171.834 70.1601L170.97 74.2881C170.394 74.2241 169.274 74.1601 167.61 74.0961C165.946 74.0321 164.154 74.0001 162.234 74.0001C160.57 74.0001 158.714 74.0641 156.666 74.1921C154.682 74.3841 153.37 74.5121 152.73 74.5761L153.21 70.6401C155.066 70.3201 156.378 69.7441 157.146 68.9121C157.914 68.0801 158.298 66.7681 158.298 64.9761L158.682 45.9681C158.682 42.7681 157.978 40.3041 156.57 38.5761C155.226 36.8481 153.274 35.9841 150.714 35.9841C147.386 35.9841 143.514 37.5841 139.098 40.7841L138.042 64.5921C138.042 66.4481 138.298 67.8241 138.81 68.7201C139.322 69.5521 140.186 69.9681 141.402 69.9681C142.106 69.9681 142.778 69.9361 143.418 69.8721C144.058 69.8081 144.506 69.7761 144.762 69.7761L144.954 70.1601L144.186 74.2881C143.61 74.2241 142.522 74.1601 140.922 74.0961C139.322 74.0321 137.562 74.0001 135.642 74.0001C133.978 74.0001 132.058 74.1601 129.882 74.4801C127.77 74.8001 126.394 75.0241 125.754 75.1521L126.138 71.2161Z" />
            <path d="M210.525 75.1521C205.341 75.1521 202.493 72.5601 201.981 67.3761L201.597 67.2801C199.293 69.5841 197.181 71.4081 195.261 72.7521C193.405 74.0961 191.997 74.7681 191.037 74.7681C187.453 74.7681 184.509 73.6481 182.205 71.4081C179.901 69.1681 178.749 66.3201 178.749 62.8641C178.749 61.0081 179.197 59.3761 180.093 57.9681C181.053 56.5601 182.301 55.6321 183.837 55.1841L202.077 50.1921L202.173 45.9681C202.173 42.7681 201.437 40.2721 199.965 38.4801C198.493 36.6881 196.413 35.7921 193.725 35.7921C191.933 35.7921 190.045 36.2081 188.061 37.0401C186.077 37.8721 184.125 39.0561 182.205 40.5921L181.725 40.3041L180.573 36.1761C183.581 34.4481 186.589 32.9121 189.597 31.5681C192.669 30.1601 194.877 29.4561 196.221 29.4561C200.381 29.4561 203.645 30.5441 206.013 32.7201C208.381 34.8961 209.565 37.9361 209.565 41.8401C209.565 43.2481 209.341 46.1281 208.893 50.4801C208.189 57.5201 207.837 62.0001 207.837 63.9201C207.837 65.3281 208.189 66.4161 208.893 67.1841C209.597 67.9521 210.557 68.3361 211.773 68.3361C212.797 68.3361 213.853 68.1121 214.941 67.6641C216.029 67.1521 216.893 66.5761 217.533 65.9361L218.877 67.4721C217.917 69.0721 216.669 70.6401 215.133 72.1761C213.661 73.6481 212.125 74.6401 210.525 75.1521ZM192.669 68.2401C193.885 68.2401 195.293 67.8241 196.893 66.9921C198.557 66.0961 200.061 64.9761 201.405 63.6321L201.885 53.8401L188.829 57.7761C186.973 58.3521 186.045 59.6961 186.045 61.8081C186.045 63.6641 186.653 65.2001 187.869 66.4161C189.149 67.6321 190.749 68.2401 192.669 68.2401Z" />
            <path d="M250.923 71.2161C252.843 70.7041 254.219 69.9681 255.051 69.0081C255.883 67.9841 256.299 66.6401 256.299 64.9761L256.683 45.9681C256.683 42.7681 255.979 40.3041 254.571 38.5761C253.227 36.8481 251.275 35.9841 248.715 35.9841C246.667 35.9841 244.587 36.5281 242.475 37.6161C240.363 38.6401 238.507 39.7601 236.907 40.9761C236.331 54.2241 236.043 62.0961 236.043 64.5921C236.043 66.5761 236.299 67.9841 236.811 68.8161C237.323 69.5841 238.219 69.9681 239.499 69.9681C240.203 69.9681 240.875 69.9361 241.515 69.8721C242.155 69.8081 242.603 69.7761 242.859 69.7761L243.051 70.1601L242.187 74.2881C241.611 74.2241 240.491 74.1601 238.827 74.0961C237.163 74.0321 235.371 74.0001 233.451 74.0001C231.787 74.0001 229.931 74.0641 227.883 74.1921C225.899 74.3841 224.587 74.5121 223.947 74.5761L224.427 70.6401C226.283 70.3201 227.595 69.7441 228.363 68.9121C229.131 68.0801 229.515 66.7681 229.515 64.9761V41.5521C229.515 39.3761 229.163 37.8721 228.459 37.0401C227.755 36.1441 226.539 35.6961 224.811 35.6961H223.755L223.467 35.3121L223.755 32.1441C226.507 31.6961 229.227 31.1841 231.915 30.6081C234.667 29.9681 236.427 29.5521 237.195 29.3601L237.771 30.1281C237.643 30.5121 237.451 31.3441 237.195 32.6241C236.939 33.8401 236.779 35.1201 236.715 36.4641L236.907 36.7521C244.203 31.8881 248.907 29.4561 251.019 29.4561C255.051 29.4561 258.251 30.5761 260.619 32.8161C262.987 35.0561 264.171 38.0641 264.171 41.8401C264.171 42.4801 263.979 45.4241 263.595 50.6721C263.083 57.3281 262.827 61.9681 262.827 64.5921C262.827 66.4481 263.083 67.8241 263.595 68.7201C264.107 69.5521 264.971 69.9681 266.187 69.9681C266.891 69.9681 267.563 69.9361 268.203 69.8721C268.843 69.8081 269.291 69.7761 269.547 69.7761L269.739 70.1601L268.971 74.2881C268.395 74.2241 267.307 74.1601 265.707 74.0961C264.107 74.0321 262.347 74.0001 260.427 74.0001C258.763 74.0001 256.843 74.1601 254.667 74.4801C252.555 74.8001 251.179 75.0241 250.539 75.1521L250.923 71.2161Z" />
            <path d="M315.325 75.1521C310.333 75.1521 307.485 72.8801 306.781 68.3361L306.109 68.0481C299.453 72.5921 295.453 74.8641 294.109 74.8641C290.461 74.8641 287.229 74.0321 284.413 72.3681C281.597 70.6401 279.421 68.2401 277.885 65.1681C276.349 62.0961 275.581 58.5761 275.581 54.6081C275.581 50.0641 276.637 45.8721 278.749 42.0321C280.925 38.1921 283.837 35.1521 287.485 32.9121C291.197 30.6081 295.197 29.4561 299.485 29.4561C301.533 29.4561 303.741 29.5841 306.109 29.8401V13.9041C306.109 10.4481 304.925 8.72007 302.557 8.72007C302.109 8.72007 301.629 8.78407 301.117 8.91207C300.605 8.97606 300.285 9.04007 300.157 9.10407L300.541 5.55206C303.293 5.16807 306.141 4.65607 309.085 4.01607C312.029 3.37607 313.917 2.96007 314.749 2.76807L315.325 4.01607C314.621 5.10407 313.981 11.8561 313.405 24.2721C312.893 36.6881 312.637 49.9041 312.637 63.9201C312.637 65.3281 312.989 66.4161 313.693 67.1841C314.397 67.9521 315.357 68.3361 316.573 68.3361C317.469 68.3361 318.333 68.1761 319.165 67.8561C320.061 67.4721 320.765 67.0881 321.277 66.7041C321.853 66.3201 322.205 66.0641 322.333 65.9361L323.677 67.4721C323.485 67.7921 323.005 68.4961 322.237 69.5841C321.469 70.6081 320.445 71.6961 319.165 72.8481C317.949 74.0001 316.669 74.7681 315.325 75.1521ZM295.645 68.6241C296.989 68.6241 298.429 68.2401 299.965 67.4721C301.565 66.7041 302.909 65.9361 303.997 65.1681C305.085 64.3361 305.789 63.7921 306.109 63.5361V37.2321C305.917 37.1041 305.437 36.8801 304.669 36.5601C303.901 36.1761 302.813 35.8241 301.405 35.5041C300.061 35.1841 298.525 35.0241 296.797 35.0241C292.509 35.0241 289.117 36.4961 286.621 39.4401C284.189 42.3201 282.973 46.2881 282.973 51.3441C282.973 54.5441 283.517 57.4561 284.605 60.0801C285.757 62.7041 287.293 64.7841 289.213 66.3201C291.197 67.8561 293.341 68.6241 295.645 68.6241Z" />
          </mask>
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            fill="#4FCDAB"
            d="M35.5841 74.2881L35.9681 70.5441C39.2321 70.2881 41.4721 69.9041 42.6881 69.3921C43.9041 68.8801 44.5121 68.0481 44.5121 66.8961C44.5121 65.6161 44.2241 64.0801 43.6481 62.2881L40.4801 51.8241C38.9441 51.7601 35.6161 51.7281 30.4961 51.7281C27.4241 51.7281 23.9361 51.9841 20.0321 52.4961L16.4801 62.4801C15.9041 64.2081 15.6161 65.4561 15.6161 66.2241C15.6161 67.6321 16.0641 68.6561 16.9601 69.2961C17.8561 69.8721 19.3281 70.1601 21.3761 70.1601H26.8481L27.0401 70.5441L26.4641 74.6721C25.6961 74.6081 23.9361 74.4801 21.1841 74.2881C18.4321 74.0961 15.7441 74.0001 13.1201 74.0001C10.7521 74.0001 8.54406 74.0321 6.49606 74.0961C4.51206 74.1601 3.20006 74.2241 2.56006 74.2881L3.32806 69.7761C5.12006 69.5841 6.56006 68.9761 7.64806 67.9521C8.73606 66.8641 9.79206 65.0081 10.8161 62.3841L29.5361 13.3281L35.5841 11.6961H36.3521C36.7361 13.2321 37.6961 16.7841 39.2321 22.3521C40.8321 27.9201 42.7521 34.5121 44.9921 42.1281C47.2961 49.7441 49.5041 56.7521 51.6161 63.1521C52.3841 65.5201 53.4081 67.1841 54.6881 68.1441C55.9681 69.1041 58.0161 69.7121 60.8321 69.9681L61.0241 70.3521L60.3521 74.2881C59.5841 74.2881 58.1761 74.2241 56.1281 74.0961C54.1441 74.0321 52.1601 74.0001 50.1761 74.0001C47.1041 74.0001 44.1281 74.1281 41.2481 74.3841C38.4321 74.6401 36.6401 74.8321 35.8721 74.9601L35.5841 74.2881ZM30.2081 47.7921C32.5121 47.7921 35.4881 47.6321 39.1361 47.3121L31.5521 22.1601H30.8801L21.7601 47.7921H30.2081Z"
            stroke="white"
            stroke-width="4"
            mask="url(#path-1-outside-1)"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            d="M63.8516 70.5441C65.7716 70.3521 67.0516 69.7441 67.6916 68.7201C68.3316 67.6321 68.6516 65.5841 68.6516 62.5761V41.4561C68.6516 39.3441 68.3636 37.8401 67.7876 36.9441C67.2116 36.0481 66.2836 35.6001 65.0036 35.6001C64.4916 35.6001 64.0436 35.6321 63.6596 35.6961C63.3396 35.7601 63.1156 35.8241 62.9876 35.8881L62.5076 35.2161L62.7956 32.2401C65.2276 31.7921 67.7876 31.2481 70.4756 30.6081C73.2276 29.9681 74.9876 29.5521 75.7556 29.3601L76.4276 29.9361C76.2996 30.5121 76.1076 31.8561 75.8516 33.9681C75.5956 36.0161 75.4996 37.9681 75.5636 39.8241L75.9476 40.1121C77.8676 37.1041 80.1076 34.6401 82.6676 32.7201C85.2916 30.8001 87.5636 29.8401 89.4836 29.8401C90.3796 29.8401 91.0516 29.9041 91.4996 30.0321C92.0116 30.0961 92.3316 30.1601 92.4596 30.2241L92.7476 30.6081C92.6196 31.5041 92.3316 33.4241 91.8836 36.3681C91.4996 39.2481 91.2756 41.9041 91.2116 44.3361L87.4676 44.6241C87.4676 42.0001 87.2756 40.2721 86.8916 39.4401C86.5716 38.5441 85.8996 38.0961 84.8756 38.0961C83.4676 38.0961 81.9636 38.7041 80.3636 39.9201C78.7636 41.0721 77.2916 42.6401 75.9476 44.6241C75.8836 46.4801 75.7556 49.5521 75.5636 53.8401C75.3716 58.1281 75.2436 61.5841 75.1796 64.2081C75.1796 66.3841 75.4996 67.8561 76.1396 68.6241C76.7796 69.3921 77.9956 69.7761 79.7876 69.7761C80.6196 69.7761 81.4516 69.7441 82.2836 69.6801C83.1156 69.6161 83.6916 69.5841 84.0116 69.5841L84.1076 69.9681L83.2436 74.1921C82.6036 74.1921 81.3236 74.1601 79.4036 74.0961C77.4836 74.0321 75.4996 74.0001 73.4516 74.0001C71.0836 74.0001 68.9396 74.0321 67.0196 74.0961C65.0996 74.2241 63.8836 74.3201 63.3716 74.3841L63.8516 70.5441Z"
            stroke="white"
            stroke-width="4"
            mask="url(#path-1-outside-1)"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            d="M126.138 71.2161C128.058 70.7041 129.434 69.9681 130.266 69.0081C131.098 67.9841 131.514 66.6401 131.514 64.9761L131.898 45.9681C131.898 42.7681 131.194 40.3041 129.786 38.5761C128.442 36.8481 126.49 35.9841 123.93 35.9841C121.882 35.9841 119.802 36.5281 117.69 37.6161C115.578 38.6401 113.722 39.7601 112.122 40.9761C111.546 54.2241 111.258 62.0961 111.258 64.5921C111.258 66.5761 111.514 67.9841 112.026 68.8161C112.538 69.5841 113.434 69.9681 114.714 69.9681C115.418 69.9681 116.09 69.9361 116.73 69.8721C117.37 69.8081 117.818 69.7761 118.074 69.7761L118.266 70.1601L117.402 74.2881C116.826 74.2241 115.706 74.1601 114.042 74.0961C112.378 74.0321 110.586 74.0001 108.666 74.0001C106.554 74.0001 104.602 74.0321 102.81 74.0961C101.018 74.1601 99.8016 74.1921 99.1616 74.1921L99.7376 70.2561C101.594 70.0641 102.874 69.5841 103.578 68.8161C104.346 68.0481 104.73 66.7681 104.73 64.9761V41.5521C104.73 39.3761 104.378 37.8721 103.674 37.0401C102.97 36.1441 101.754 35.6961 100.026 35.6961H98.9696L98.6816 35.3121L98.9696 32.1441C101.722 31.6961 104.442 31.1841 107.13 30.6081C109.882 29.9681 111.642 29.5521 112.41 29.3601L112.986 30.1281C112.858 30.5121 112.666 31.3441 112.41 32.6241C112.154 33.8401 111.994 35.1201 111.93 36.4641L112.122 36.7521C119.29 31.8881 123.994 29.4561 126.234 29.4561C129.306 29.4561 131.898 30.1281 134.01 31.4721C136.122 32.7521 137.626 34.6081 138.522 37.0401C140.826 35.3761 143.418 33.7121 146.298 32.0481C149.178 30.3201 151.418 29.4561 153.018 29.4561C157.05 29.4561 160.25 30.5761 162.618 32.8161C164.986 35.0561 166.17 38.0641 166.17 41.8401C166.17 42.4801 165.978 45.4241 165.594 50.6721C165.082 57.3281 164.826 61.9681 164.826 64.5921C164.826 66.5761 165.082 67.9841 165.594 68.8161C166.106 69.5841 167.002 69.9681 168.282 69.9681C168.986 69.9681 169.658 69.9361 170.298 69.8721C170.938 69.8081 171.386 69.7761 171.642 69.7761L171.834 70.1601L170.97 74.2881C170.394 74.2241 169.274 74.1601 167.61 74.0961C165.946 74.0321 164.154 74.0001 162.234 74.0001C160.57 74.0001 158.714 74.0641 156.666 74.1921C154.682 74.3841 153.37 74.5121 152.73 74.5761L153.21 70.6401C155.066 70.3201 156.378 69.7441 157.146 68.9121C157.914 68.0801 158.298 66.7681 158.298 64.9761L158.682 45.9681C158.682 42.7681 157.978 40.3041 156.57 38.5761C155.226 36.8481 153.274 35.9841 150.714 35.9841C147.386 35.9841 143.514 37.5841 139.098 40.7841L138.042 64.5921C138.042 66.4481 138.298 67.8241 138.81 68.7201C139.322 69.5521 140.186 69.9681 141.402 69.9681C142.106 69.9681 142.778 69.9361 143.418 69.8721C144.058 69.8081 144.506 69.7761 144.762 69.7761L144.954 70.1601L144.186 74.2881C143.61 74.2241 142.522 74.1601 140.922 74.0961C139.322 74.0321 137.562 74.0001 135.642 74.0001C133.978 74.0001 132.058 74.1601 129.882 74.4801C127.77 74.8001 126.394 75.0241 125.754 75.1521L126.138 71.2161Z"
            stroke="white"
            stroke-width="4"
            mask="url(#path-1-outside-1)"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            d="M210.525 75.1521C205.341 75.1521 202.493 72.5601 201.981 67.3761L201.597 67.2801C199.293 69.5841 197.181 71.4081 195.261 72.7521C193.405 74.0961 191.997 74.7681 191.037 74.7681C187.453 74.7681 184.509 73.6481 182.205 71.4081C179.901 69.1681 178.749 66.3201 178.749 62.8641C178.749 61.0081 179.197 59.3761 180.093 57.9681C181.053 56.5601 182.301 55.6321 183.837 55.1841L202.077 50.1921L202.173 45.9681C202.173 42.7681 201.437 40.2721 199.965 38.4801C198.493 36.6881 196.413 35.7921 193.725 35.7921C191.933 35.7921 190.045 36.2081 188.061 37.0401C186.077 37.8721 184.125 39.0561 182.205 40.5921L181.725 40.3041L180.573 36.1761C183.581 34.4481 186.589 32.9121 189.597 31.5681C192.669 30.1601 194.877 29.4561 196.221 29.4561C200.381 29.4561 203.645 30.5441 206.013 32.7201C208.381 34.8961 209.565 37.9361 209.565 41.8401C209.565 43.2481 209.341 46.1281 208.893 50.4801C208.189 57.5201 207.837 62.0001 207.837 63.9201C207.837 65.3281 208.189 66.4161 208.893 67.1841C209.597 67.9521 210.557 68.3361 211.773 68.3361C212.797 68.3361 213.853 68.1121 214.941 67.6641C216.029 67.1521 216.893 66.5761 217.533 65.9361L218.877 67.4721C217.917 69.0721 216.669 70.6401 215.133 72.1761C213.661 73.6481 212.125 74.6401 210.525 75.1521ZM192.669 68.2401C193.885 68.2401 195.293 67.8241 196.893 66.9921C198.557 66.0961 200.061 64.9761 201.405 63.6321L201.885 53.8401L188.829 57.7761C186.973 58.3521 186.045 59.6961 186.045 61.8081C186.045 63.6641 186.653 65.2001 187.869 66.4161C189.149 67.6321 190.749 68.2401 192.669 68.2401Z"
            stroke="white"
            stroke-width="4"
            mask="url(#path-1-outside-1)"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            d="M250.923 71.2161C252.843 70.7041 254.219 69.9681 255.051 69.0081C255.883 67.9841 256.299 66.6401 256.299 64.9761L256.683 45.9681C256.683 42.7681 255.979 40.3041 254.571 38.5761C253.227 36.8481 251.275 35.9841 248.715 35.9841C246.667 35.9841 244.587 36.5281 242.475 37.6161C240.363 38.6401 238.507 39.7601 236.907 40.9761C236.331 54.2241 236.043 62.0961 236.043 64.5921C236.043 66.5761 236.299 67.9841 236.811 68.8161C237.323 69.5841 238.219 69.9681 239.499 69.9681C240.203 69.9681 240.875 69.9361 241.515 69.8721C242.155 69.8081 242.603 69.7761 242.859 69.7761L243.051 70.1601L242.187 74.2881C241.611 74.2241 240.491 74.1601 238.827 74.0961C237.163 74.0321 235.371 74.0001 233.451 74.0001C231.787 74.0001 229.931 74.0641 227.883 74.1921C225.899 74.3841 224.587 74.5121 223.947 74.5761L224.427 70.6401C226.283 70.3201 227.595 69.7441 228.363 68.9121C229.131 68.0801 229.515 66.7681 229.515 64.9761V41.5521C229.515 39.3761 229.163 37.8721 228.459 37.0401C227.755 36.1441 226.539 35.6961 224.811 35.6961H223.755L223.467 35.3121L223.755 32.1441C226.507 31.6961 229.227 31.1841 231.915 30.6081C234.667 29.9681 236.427 29.5521 237.195 29.3601L237.771 30.1281C237.643 30.5121 237.451 31.3441 237.195 32.6241C236.939 33.8401 236.779 35.1201 236.715 36.4641L236.907 36.7521C244.203 31.8881 248.907 29.4561 251.019 29.4561C255.051 29.4561 258.251 30.5761 260.619 32.8161C262.987 35.0561 264.171 38.0641 264.171 41.8401C264.171 42.4801 263.979 45.4241 263.595 50.6721C263.083 57.3281 262.827 61.9681 262.827 64.5921C262.827 66.4481 263.083 67.8241 263.595 68.7201C264.107 69.5521 264.971 69.9681 266.187 69.9681C266.891 69.9681 267.563 69.9361 268.203 69.8721C268.843 69.8081 269.291 69.7761 269.547 69.7761L269.739 70.1601L268.971 74.2881C268.395 74.2241 267.307 74.1601 265.707 74.0961C264.107 74.0321 262.347 74.0001 260.427 74.0001C258.763 74.0001 256.843 74.1601 254.667 74.4801C252.555 74.8001 251.179 75.0241 250.539 75.1521L250.923 71.2161Z"
            stroke="white"
            stroke-width="4"
            mask="url(#path-1-outside-1)"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            d="M315.325 75.1521C310.333 75.1521 307.485 72.8801 306.781 68.3361L306.109 68.0481C299.453 72.5921 295.453 74.8641 294.109 74.8641C290.461 74.8641 287.229 74.0321 284.413 72.3681C281.597 70.6401 279.421 68.2401 277.885 65.1681C276.349 62.0961 275.581 58.5761 275.581 54.6081C275.581 50.0641 276.637 45.8721 278.749 42.0321C280.925 38.1921 283.837 35.1521 287.485 32.9121C291.197 30.6081 295.197 29.4561 299.485 29.4561C301.533 29.4561 303.741 29.5841 306.109 29.8401V13.9041C306.109 10.4481 304.925 8.72007 302.557 8.72007C302.109 8.72007 301.629 8.78407 301.117 8.91207C300.605 8.97606 300.285 9.04007 300.157 9.10407L300.541 5.55206C303.293 5.16807 306.141 4.65607 309.085 4.01607C312.029 3.37607 313.917 2.96007 314.749 2.76807L315.325 4.01607C314.621 5.10407 313.981 11.8561 313.405 24.2721C312.893 36.6881 312.637 49.9041 312.637 63.9201C312.637 65.3281 312.989 66.4161 313.693 67.1841C314.397 67.9521 315.357 68.3361 316.573 68.3361C317.469 68.3361 318.333 68.1761 319.165 67.8561C320.061 67.4721 320.765 67.0881 321.277 66.7041C321.853 66.3201 322.205 66.0641 322.333 65.9361L323.677 67.4721C323.485 67.7921 323.005 68.4961 322.237 69.5841C321.469 70.6081 320.445 71.6961 319.165 72.8481C317.949 74.0001 316.669 74.7681 315.325 75.1521ZM295.645 68.6241C296.989 68.6241 298.429 68.2401 299.965 67.4721C301.565 66.7041 302.909 65.9361 303.997 65.1681C305.085 64.3361 305.789 63.7921 306.109 63.5361V37.2321C305.917 37.1041 305.437 36.8801 304.669 36.5601C303.901 36.1761 302.813 35.8241 301.405 35.5041C300.061 35.1841 298.525 35.0241 296.797 35.0241C292.509 35.0241 289.117 36.4961 286.621 39.4401C284.189 42.3201 282.973 46.2881 282.973 51.3441C282.973 54.5441 283.517 57.4561 284.605 60.0801C285.757 62.7041 287.293 64.7841 289.213 66.3201C291.197 67.8561 293.341 68.6241 295.645 68.6241Z"
            stroke="white"
            stroke-width="4"
            mask="url(#path-1-outside-1)"
          />
        </motion.svg>
      </>
    );
  }
}

export default Firstname;

{
  /* <motion.path
variants={icon}
initial="hidden"
animate="visible"
d="M319.765 78.384C314.773 78.384 311.925 76.112 311.221 71.568L310.549 71.28C303.893 75.824 299.893 78.096 298.549 78.096C294.901 78.096 291.669 77.264 288.853 75.6C286.037 73.872 283.861 71.472 282.325 68.4C280.789 65.328 280.021 61.808 280.021 57.84C280.021 53.296 281.077 49.104 283.189 45.264C285.365 41.424 288.277 38.384 291.925 36.144C295.637 33.84 299.637 32.688 303.925 32.688C305.973 32.688 308.181 32.816 310.549 33.072V17.136C310.549 13.68 309.365 11.952 306.997 11.952C306.549 11.952 306.069 12.016 305.557 12.144C305.045 12.208 304.725 12.272 304.597 12.336L304.981 8.784C307.733 8.4 310.581 7.888 313.525 7.248C316.469 6.608 318.357 6.192 319.189 6L319.765 7.248C319.061 8.336 318.421 15.088 317.845 27.504C317.333 39.92 317.077 53.136 317.077 67.152C317.077 68.56 317.429 69.648 318.133 70.416C318.837 71.184 319.797 71.568 321.013 71.568C321.909 71.568 322.773 71.408 323.605 71.088C324.501 70.704 325.205 70.32 325.717 69.936C326.293 69.552 326.645 69.296 326.773 69.168L328.117 70.704C327.925 71.024 327.445 71.728 326.677 72.816C325.909 73.84 324.885 74.928 323.605 76.08C322.389 77.232 321.109 78 319.765 78.384ZM300.085 71.856C301.429 71.856 302.869 71.472 304.405 70.704C306.005 69.936 307.349 69.168 308.437 68.4C309.525 67.568 310.229 67.024 310.549 66.768V40.464C310.357 40.336 309.877 40.112 309.109 39.792C308.341 39.408 307.253 39.056 305.845 38.736C304.501 38.416 302.965 38.256 301.237 38.256C296.949 38.256 293.557 39.728 291.061 42.672C288.629 45.552 287.413 49.52 287.413 54.576C287.413 57.776 287.957 60.688 289.045 63.312C290.197 65.936 291.733 68.016 293.653 69.552C295.637 71.088 297.781 71.856 300.085 71.856Z"
stroke="white"
stroke-width="10"
mask="url(#path-1-outside-1)"
/> */
}
