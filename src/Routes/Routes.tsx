import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "../Pages/Home";

export default function Routing() {
  return (
    <NativeRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </NativeRouter>
  );
}
