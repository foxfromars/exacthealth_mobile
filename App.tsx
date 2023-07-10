import { useFonts } from "expo-font";

import Routes from './src/Routes/Routes';
import { useEffect } from "react";
import migrations from "./src/Database/migrations/";

export default function App() {
  useEffect(() => {
    async function startUp() {
      migrations.runAll();
    }
    startUp();
  });

  const [loaded] = useFonts({
    Roboto: require('./assets/Roboto/Roboto-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }


  return Routes();
}

