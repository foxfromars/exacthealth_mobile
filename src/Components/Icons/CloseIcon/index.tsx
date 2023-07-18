import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg
      height={30}
      viewBox="0 -960 960 960"
      width={30}
    >
      <Path
        d="M249-207l-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231z"
        fill="black"
      />
    </Svg>
  )
}

export default SvgComponent
