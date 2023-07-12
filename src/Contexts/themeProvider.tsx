import {
  createContext,
  useState,
} from "react";
import themeFile from "../Theme/";
import Theme from "../Theme/theme";



export const ThemeContext = createContext<Theme>({});

export default function AlertProvider({ children }: any) {
  const [theme, setTheme] = useState<Theme>({
    ...themeFile,
  });

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider >
  );
}
