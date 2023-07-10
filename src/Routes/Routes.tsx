import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "../Pages/Home";
import Medicines from "../Pages/Medicines";

export default function Routing() {
  return (
    <NativeRouter>
      <Routes>
        <Route element={<Home />} path="/hello" />
        <Route element={<Medicines />} path="/" />
      </Routes>
    </NativeRouter>
  );
}
