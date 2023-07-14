import { NativeRouter, Route, Routes } from "react-router-native";
import Medicines from "../Pages/Medicines";

export default function Routing() {
  return (
    <NativeRouter>
      <Routes>
        <Route element={<Medicines />} path="/" />
      </Routes>
    </NativeRouter>
  );
}
