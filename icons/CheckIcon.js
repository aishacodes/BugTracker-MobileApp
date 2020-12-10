import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={13}
      height={9}
      viewBox="0 0 13 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.925.772a.834.834 0 010 1.178L5.257 8.618a.833.833 0 01-1.178 0L.745 5.284a.833.833 0 011.178-1.178L4.668 6.85 10.747.772a.834.834 0 011.178 0z"
        fill="#95A4A6"
      />
    </Svg>
  );
}

export default SvgComponent;
