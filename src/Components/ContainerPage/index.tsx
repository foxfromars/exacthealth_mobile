import { Outlet } from "react-router-native";
import Navbar from "../Navbar";
import { Container } from "./styles";

export default function ContainerPage() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}
