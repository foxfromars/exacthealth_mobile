import { Dimensions } from "react-native";
import ThemeInterface from "./theme";

const Theme: ThemeInterface = {
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057"
    },
    text: {
      main: "#000000",
      secondary: "#ffffff",
    },
    subtext: {
      main: "grey",
    },
    background: {
      main: "white",
    }
  },
  dimensions: {
    screenWidth: Dimensions.get("window").width,
    screenHeight: Dimensions.get("window").height,
  },
};

export default Theme;
