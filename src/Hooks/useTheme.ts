import {
  useContext,
} from "react";

import {ThemeContext } from "../Contexts/themeProvider"; 

export default function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}
