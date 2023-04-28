import React, { useEffect } from "react";
import classes from "./Preloader.module.css";
import preloaderImg from "../../assets/login-bg-14.png";

const Preloader: React.FC = () => {
  return (
    <>
      <div className={classes["preloader--container"]}>
        <img src={preloaderImg} className={classes.box} alt="" />

        {/* <svg
          width="832"
          height="266"
          viewBox="0 0 832 266"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes.preloader}
        >
          <path
            d="M1.69141 259V260.5H3.19141H145.047H146.547V259V237.379V235.879H145.047H27.3672V145.363H122.371H123.871V143.863V122.242V120.742H122.371H27.3672V30.0508H145.047H146.547V28.5508V6.92969V5.42969H145.047H3.19141H1.69141V6.92969V259Z"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M329.388 255.636L329.398 255.632C337.182 252.278 343.964 247.72 349.729 241.955C355.492 236.192 359.993 229.469 363.23 221.799C366.595 214.104 368.273 205.874 368.273 197.125V68.9805C368.273 60.2331 366.596 52.0043 363.231 44.3097C359.995 36.5235 355.494 29.7403 349.729 23.9745C343.963 18.2086 337.179 13.7079 329.393 10.4717C321.699 7.10753 313.47 5.42969 304.723 5.42969H224.918H223.418V6.92969V259V260.5H224.918H304.723C313.467 260.5 321.694 258.882 329.388 255.636ZM339.555 53.9268L339.555 53.9268L339.56 53.9389C341.58 58.5401 342.598 63.5479 342.598 68.9805V197.125C342.598 202.555 341.581 207.624 339.557 212.348C337.526 216.973 334.709 221.029 331.101 224.524L331.092 224.532L331.084 224.541C327.592 228.033 323.476 230.799 318.722 232.836L318.71 232.841C314.108 234.861 309.101 235.879 303.668 235.879H249.094V30.0508H303.668C309.101 30.0508 314.108 31.0683 318.71 33.0883L318.709 33.0884L318.722 33.0936C323.466 35.1267 327.576 37.9441 331.067 41.5476L331.084 41.5647L331.101 41.5813C334.704 45.0721 337.522 49.1829 339.555 53.9268Z"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M595.34 260.5H596.84V259V126.461V124.961H595.34H532.41H530.91V126.461V148.082V149.582H532.41H571.164V200.641C571.164 206.071 570.147 211.14 568.124 215.864C566.088 220.5 563.32 224.623 559.818 228.241C556.327 231.729 552.214 234.492 547.464 236.527L547.452 236.533C542.85 238.553 537.843 239.57 532.41 239.57H516.59C511.159 239.57 506.09 238.554 501.365 236.53C496.733 234.495 492.613 231.73 488.998 228.232C485.5 224.617 482.735 220.496 480.7 215.864C478.677 211.14 477.66 206.071 477.66 200.641V65.2891C477.66 59.8565 478.678 54.8487 480.698 50.2475L480.698 50.2475L480.703 50.2354C482.739 45.4852 485.502 41.372 488.99 37.8816C492.607 34.3789 496.73 31.6115 501.367 29.5753C506.091 27.5517 511.16 26.5352 516.59 26.5352H532.41C537.843 26.5352 542.85 27.5526 547.452 29.5727L547.452 29.5727L547.464 29.5779C552.218 31.6154 556.334 34.381 559.826 37.8732C563.318 41.3654 566.084 45.4814 568.121 50.2354L568.121 50.2354L568.127 50.2475C570.147 54.8487 571.164 59.8565 571.164 65.2891V79V80.7505L572.894 80.4823L595.57 76.9667L596.84 76.7697V75.4844V65.2891C596.84 56.5404 595.161 48.3105 591.796 40.615C588.559 32.9445 584.058 26.2218 578.295 20.4589C572.532 14.6959 565.809 10.195 558.139 6.95769C550.443 3.59244 542.213 1.91406 533.465 1.91406H515.535C506.785 1.91406 498.498 3.59305 490.689 6.95614C483.017 10.1935 476.293 14.695 470.529 20.4589C464.768 26.22 460.21 32.9395 456.856 40.6058L456.852 40.6149L456.848 40.624C453.603 48.3178 451.984 56.5445 451.984 65.2891V200.641C451.984 209.385 453.603 217.612 456.848 225.306L456.852 225.315L456.856 225.324C460.21 232.99 464.768 239.71 470.529 245.471C476.29 251.232 483.01 255.79 490.676 259.144L490.689 259.149L490.702 259.155C498.508 262.397 506.79 264.016 515.535 264.016H528.719C538.556 264.016 547.533 261.854 555.62 257.509L555.628 257.505L555.635 257.501C563.062 253.399 569.465 248.016 574.838 241.361L586.876 259.819L587.32 260.5H588.133H595.34Z"
            stroke="white"
            stroke-width="3"
          />
          <path
            d="M684.691 259V260.5H686.191H828.047H829.547V259V237.379V235.879H828.047H710.367V145.363H805.371H806.871V143.863V122.242V120.742H805.371H710.367V30.0508H828.047H829.547V28.5508V6.92969V5.42969H828.047H686.191H684.691V6.92969V259Z"
            stroke="white"
            stroke-width="3"
          />
        </svg> */}
      </div>
    </>
  );
};

export default Preloader;
