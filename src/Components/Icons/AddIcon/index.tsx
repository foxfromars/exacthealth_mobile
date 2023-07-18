import Svg, { Path } from "react-native-svg";
const SvgComponent = () => (
  <Svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
  >
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="white" />
  </Svg>
);
export default SvgComponent;
