export default interface Theme {
  palette?: {
    primary?: {
      main: string;
      secondary?: string; 
    },
    secondary?: {
      main: string;
      secondary?: string;
    },
    text?: {
      main: string;
      secondary?: string;
    },
    subtext?: {
      main: string;
    },
    error?: {
      main: string;
      secondary?: string;
    },
    warning?: {
      main: string;
      secondary?: string;
    },
    info?: {
      main: string;
      secondary?: string;
    },
    success?: {
      main: string;
      secondary?: string;
    },
    background?: {
      main: string;
      secondary?: string;
    },
  };
}
