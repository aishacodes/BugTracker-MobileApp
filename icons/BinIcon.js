import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.667 4.704h14.817m-.926 0l-.803 11.245a1.853 1.853 0 01-1.847 1.721H5.243a1.852 1.852 0 01-1.847-1.72L2.593 4.703h12.965zM7.223 8.41v5.557-5.557zm3.705 0v5.557-5.557zm.926-3.705V1.926A.926.926 0 0010.928 1H7.223a.926.926 0 00-.926.926v2.778h5.557z"
        stroke="#B5B5B9"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
