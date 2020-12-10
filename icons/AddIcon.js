import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={37}
      height={37}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.5 12.667V18.5v-5.833zm0 5.833v5.833V18.5zm0 0h5.833H18.5zm0 0h-5.833H18.5zm17.5 0a17.5 17.5 0 11-34.999 0A17.5 17.5 0 0136 18.5z"
        fill="#000"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
